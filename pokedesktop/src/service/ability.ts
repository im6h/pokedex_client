import BASE_URL from "./ApiEndpoint";
import axios, { AxiosResponse } from "axios";

class AbilityApi {
  async getAllAbilities(
    offset: number,
    limit: number
  ): Promise<AxiosResponse<any>> {
    return axios.get(`${BASE_URL}/ability/?offset=${offset}&limit=${limit}`);
  }

  async getAbilityById(idAbility: string): Promise<AxiosResponse<any>> {
    return axios.get(`${BASE_URL}/ability/${idAbility}`);
  }
}

const abilityApi = new AbilityApi();
export default abilityApi;
