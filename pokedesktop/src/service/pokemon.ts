import BASE_URL from "./ApiEndpoint";
import axios from "axios";

class PokemonApi {
  async getPokemonById(idPokemon: number) {
    return axios.get(`${BASE_URL}/pokemon/${idPokemon}`);
  }

  async getPokemonByName(namePokemon: string) {
    return axios.get(`${BASE_URL}/pokemon/${namePokemon}`);
  }
}

const pokemonApi = new PokemonApi();
export default pokemonApi;
