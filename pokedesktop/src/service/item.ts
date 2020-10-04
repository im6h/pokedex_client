import BASE_URL from "./ApiEndpoint";
import axios, { AxiosResponse } from "axios";

class ItemApi {
  async getAllItems(
    offset: number,
    limit: number
  ): Promise<AxiosResponse<any>> {
    return axios.get(`${BASE_URL}/item/?offset=${offset}&limit=${limit}`);
  }
  async getDetailItem(idItem: string): Promise<AxiosResponse<any>> {
    return axios.get(`${BASE_URL}/item/${idItem}`);
  }
}
const itemApi = new ItemApi();
export default itemApi;
