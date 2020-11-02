import { API_URL } from 'src/config/contraints';
import axios from 'axios';

const limit = 100;
class Item {
  async getItems(offset: number) {
    return axios.get(`${API_URL}/item?limit=${limit}&offset=${offset}`);
  }

  async getItem(id: number) {
    return axios.get(`${API_URL}/item/${id}`);
  }
}
export default new Item();
