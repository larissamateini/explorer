const AppError = require("../utils/AppError")
const sqliteConnection = require('../database/sqlite')
const { hash, compare } = require('bcryptjs')

class UsersController {
  async create(request, response) {
    const {name, email, password } = request.body

    const database = await sqliteConnection()
    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if(checkUserExists) {
      throw new AppError('Este e-mail já está em uso.');
    }

    const hashedPassword = await hash(password, 8);

    await database.run(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]
    );

    return response.status(201).json();
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body
    const user_id = request.user.id
    //const { id } = request.params

    const database = await sqliteConnection();

    const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id])
    //id
    if(!user) {
      throw new AppError('Usuário não encontrado.')
    }

    const userWithUpdatedEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)", [email]
    );
    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError('Este e-mail já está em uso.');
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if(password && !old_password) {
      throw new AppError('Para alterar a sua senha é obrigatório informar a senha atual.');
    }

    if(password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if(!checkOldPassword) {
        throw new AppError('Senha atual incorreta.');
      }

      user.password = await hash(password, 8);
    }
//await database.run(
    database.run(
      `UPDATE users SET
      name = ?,
      email = ?,
      password = ?,
      updated_at = DATETIME('now')
      WHERE id = ?`,
      [user.name, user.email, user.password, user_id]
    )
//[user.name, user.email, user.password, id]
    return response.status(200).json();
  }
}

module.exports = UsersController;