import BASE_URL from "./ApiEndpoint";
import axios, { AxiosResponse } from "axios";

class PokemonApi {
  async getPokemonById(idPokemon: number): Promise<AxiosResponse<any>> {
    return axios.get(`${BASE_URL}/pokemon/${idPokemon}`);
  }

  async getPokemonSpecialById(idPokemon: number): Promise<AxiosResponse<any>> {
    return axios.get(`${BASE_URL}/pokemon-species/${idPokemon}`);
  }
}

const pokemonApi = new PokemonApi();
export default pokemonApi;
