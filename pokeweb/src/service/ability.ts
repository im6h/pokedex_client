import { API_URL } from 'src/config/contraints';
import axios from 'axios';

const limit = 100;
class Ability {
  async getAbilites(offset: number) {
    return axios.get(`${API_URL}/ability`, {
      params: {
        limit,
        offset
      }
    });
  }

  async getAbility(id: number) {
    return axios.get(`${API_URL}/ability/${id}`);
  }
}
export default new Ability();
