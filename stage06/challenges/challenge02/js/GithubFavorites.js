import { GithubUser } from "./GithubUser.js";

export class GithubFavorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.loadFavorites();
  }

  loadFavorites() {
    this.favoritesData = JSON.parse(localStorage.getItem('@github-favorites:')) || [];
  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.favoritesData));
  }

  async add(username) {
    try {
      const UserExists = this.favoritesData.find(favorite => favorite.login === username);
      if(UserExists) {
        throw new Error('Usuário já cadastrado como favorito!')
      }

      const user = await GithubUser.searchUser(username);

      if(user.login === undefined) {
        throw new Error('Usuário não encontrado.');
      }

      this.favoritesData = [user, ...this.favoritesData];
      this.updateFavorites();
      this.save();

    } catch(error) {
      alert(error.message);
    }
  }
  
  delete(user) {
    this.favoritesData = this.favoritesData
      .filter(favorite => favorite.login !== user.login);
    
    this.updateFavorites();
    this.save()
  }
}

export class FavoritesView extends GithubFavorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody');

    this.updateFavorites();
    this.onadd();
  }
  
  onadd() {
    const addFavButton = this.root.querySelector('#search-button');
    
    addFavButton.onclick = () => {
      const { value } = this.root.querySelector('#input-search');

      this.add(value);
    }
  }
  
  updateFavorites() {
    this.removeAllFavorites();
    
    this.favoritesData.forEach( user => {
        const row = this.createNewFavRow();
        
        row.querySelector('.user img').src = `https://github.com/${user.login}.png`;
        row.querySelector('.user img').alt = `Imagem de ${user.name}`;
        row.querySelector('.user a').href = `https://github.com/${user.login}`;
        row.querySelector('.user a p').textContent = `${user.name}`;
        row.querySelector('.user a span').textContent = `/${user.login}`;
        row.querySelector('.repositories').textContent = `${user.public_repos}`;
        row.querySelector('.followers').textContent = `${user.followers}`;

        row.querySelector('.remove').onclick = () => {
          const IsOk = confirm('Tem certeza que deseja remover esse Github favorite?');
          if(IsOk) {
            this.delete(user);
          }
        }
        
        this.tbody.append(row);
      })
  }

  createNewFavRow() {
    const tr = document.createElement('tr');

    tr.innerHTML = `
    <tr>
      <td class="user">
        <img src="https://github.com/.png" alt="Imagem de ">
        <a href="https://github.com/" target="_blank">
          <p></p>
          <span>/</span>
        </a>
      </td>
      <td class="repositories">
        0
      </td>
      <td class="followers">
        0
      </td>
      <td>
        <button class="remove">
          Remove
        </button>
      </td>
    </tr>`

    return tr
  }
  
  removeAllFavorites() {
    const tr = this.tbody.querySelectorAll('tr');

    tr.forEach((tr) => {
      tr.remove();
    })
  }
}