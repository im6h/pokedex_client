import BASE_URL from "../ApiEndpoint";
import axios from "axios";

class MoveApi {
  async getAllMoves(offset: number, limit: number) {
    return axios.get(`${BASE_URL}/move/?offset=${offset}&limit=${limit}`);
  }

  async getMoveById(idMove: number) {
    return axios.get(`${BASE_URL}/move/${idMove}`)
  }
}

const moveApi = new MoveApi();
export default moveApi;
