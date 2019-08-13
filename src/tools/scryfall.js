import axios from 'axios';


const API = axios.create({
  baseURL: 'https://api.scryfall.com/',
  headers: {Accept: 'application/json'},
});


export default new class Scryfall {

  search(query) {
    const data = {q: query, unique: 'prints'};
    const path = 'cards/search/';
    return API.get(path, {params: data}).then(response => response.data.data, () => []);
  }
}();
