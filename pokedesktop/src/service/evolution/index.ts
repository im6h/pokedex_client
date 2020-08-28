import BASE_URL from "../ApiEndpoint";
import axios from 'axios'

class EvolutionApi {
  async getEvolutionByPokemonId(idPokemon: number) {
    return axios.get(`${BASE_URL}/evolution-chain/${idPokemon}/`)
  }
}

const evolutionApi = new EvolutionApi();
export default evolutionApi;