import BASE_URL from "./ApiEndpoint";
import axios from "axios";

class PokemonApi {
  async getPokemonById(idPokemon: number) {
    return axios.get(`${BASE_URL}/pokemon/${idPokemon}`);
  }

  async getPokemonSpecialById(idPokemon: number) {
    return axios.get(`${BASE_URL}/pokemon-species/${idPokemon}`);
  }
}

const pokemonApi = new PokemonApi();
export default pokemonApi;
