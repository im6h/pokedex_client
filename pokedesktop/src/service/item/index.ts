import BASE_URL from "../ApiEndpoint";
import axios from "axios";

class ItemApi {
  async getAllItems(offset: number, limit: number) {
    return axios.get(`${BASE_URL}/item/?offset=${offset}&limit=${limit}`);
  }
}
const itemApi = new ItemApi();
export default itemApi;