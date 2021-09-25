import { API_URL } from 'src/config/contraints';
import axios from 'axios';

const limit = 100;
class Move {
  async getMoves(offset: number) {
    return axios.get(`${API_URL}/move`, {
      params: {
        limit,
        offset
      }
    });
  }

  async getMove(id: number) {
    return axios.get(`${API_URL}/move/${id}`);
  }
}
export default new Move();
