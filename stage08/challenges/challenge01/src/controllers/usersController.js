const AppError = require('../utils/AppError');
//const sqliteConnection = require('../database/sqlite');
const knex = require('../database/knex');
const { hash, compare } = require('bcryptjs');

class UsersController {
  async create(request, response) {
    const {name, email, password} = request.body;

    //const database = await sqliteConnection();
    const userAlreadyExists = await knex("users").where({email: email});

    //const userAlreadyExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);
    if(userAlreadyExists) {
      throw new AppError("Este e-mail já está cadastrado.");
    }

    const hashedPassword = await hash(password, 8);

    /* await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );*/
    const [ id ] = await knex("users").insert({
      name,
      email,
      hashedPassword
    })

    //return response.status(201).json();

    return response.json();
  }

  async update(request, response) {
    const {name, email, new_password, old_password} = request.body;
    const { id } = request.params;

    //const database = await sqliteConnection();

    /* const user = await database.get('SELECT * FROM users WHERE id = (?)', [id]) */
    const user = await knex()
    if(!user) {
      throw new AppError('Usuário não encontrado.');
    }

    const updatedEmailsOwner = await database.get('SELECT * FROM users WHERE email = (?)', [ email ]);
    if (updatedEmailsOwner && updatedEmailsOwner.id !== user.id) {
      throw new AppError('Este e-mail já está cadastrado.');
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if(new_password && !old_password) {
      throw new AppError('Para atualizar sua senha é necessário informar a senha atual.');
    }

    if(new_password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if(!checkOldPassword) {
        throw new AppError('Senha incorreta.')
      }

      user.password = await hash(new_password, 8);
    }

    await database.run(`
      UPDATE users SET
      name = ?,
      email = ?,
      password = ?,
      updated_at = DATETIME('now')
      WHERE id = ?`,
      [user.name, user.email, user.password, id]
    );

    return response.status(200).json();
  }

  async delete(request, response) {
    const {id} = request.params;

    const database = await sqliteConnection();

    const user = await database.get('SELECT * FROM users WHERE id = (?)', [id]);

    if(user.id == id) {
      await database.run(`
        DELETE FROM users WHERE id = (?)`,
        [user.id]);
    }

    return response.status(200).json();
  }
}

module.exports = UsersController;