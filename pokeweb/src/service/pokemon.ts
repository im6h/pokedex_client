import { API_URL } from 'src/config/contraints';
import axios from 'axios';

const limit = 151;
class Pokemon {
  async getPokemons(offset: number) {
    return axios.get(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);
  }

  async getPokemon(id: number) {
    return axios.get(`${API_URL}/pokemon/${id}`);
  }

  async getSpecial(id: number) {
    return axios.get(`${API_URL}/pokemon-species/${id}`);
  }
}
export default new Pokemon();
