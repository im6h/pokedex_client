import axios from "axios";
import BASE_URL from "./ApiEndpoint";

class PokedexApi {
  async getAllPokemon(offset: number, limit: number) {
    return axios.get(`${BASE_URL}/pokemon/?offset=${offset}&limit=${limit}`);
  }
}

const pokedexApi = new PokedexApi();
export default pokedexApi;
