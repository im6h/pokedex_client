import BASE_URL from "./ApiEndpoint";
import axios, { AxiosResponse } from "axios";

class TypeApi {
  async getAllTypes(): Promise<AxiosResponse<any>> {
    return axios.get(`${BASE_URL}/type/`);
  }

  async getTypeById(idType: string): Promise<AxiosResponse<any>> {
    return axios.get(`${BASE_URL}/type/${idType}`);
  }
}

const typeApi = new TypeApi();
export default typeApi;
