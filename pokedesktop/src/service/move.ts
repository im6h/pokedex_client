import BASE_URL from "./ApiEndpoint";
import axios, { AxiosResponse } from "axios";

class MoveApi {
  async getAllMoves(
    offset: number,
    limit: number
  ): Promise<AxiosResponse<any>> {
    return axios.get(`${BASE_URL}/move/?offset=${offset}&limit=${limit}`);
  }

  async getMoveById(idMove: string): Promise<AxiosResponse<any>> {
    return axios.get(`${BASE_URL}/move/${idMove}`);
  }
}

const moveApi = new MoveApi();
export default moveApi;
