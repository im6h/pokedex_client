import BASE_URL from "../ApiEndpoint";
import axios from "axios";

class AbilityApi {
  async getAllAbilities(offset: number, limit: number) {
    return axios.get(`${BASE_URL}/ability/?offset=${offset}&limit=${limit}`);
  }

  async getAbilityById(idAbility: number) {
    return axios.get(`${BASE_URL}/ability/${idAbility}`);
  }
}

const abilityApi = new AbilityApi();
export default abilityApi;
