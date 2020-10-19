import { API_URL } from 'src/config/contraints'
import axios from 'axios'

const limit = 100
class Type {
  async getTypes(offset: number) {
    return axios.get(`${API_URL}/type?limit=${limit}&offset=${offset}`)
  }

  async getType(id: number) {
    return axios.get(`${API_URL}/type/${id}`)
  }
}
export default new Type()
