import { API_URL } from 'src/config/contraints';
import axios from 'axios';

class Generation {
  async getGenerations() {
    return axios.get(`${API_URL}/generation`);
  }

  async getGeneration(id: number) {
    return axios.get(`${API_URL}/generation/${id}`);
  }
}
export default new Generation();
