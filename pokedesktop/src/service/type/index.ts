import BASE_URL from "../ApiEndpoint";
import axios from 'axios'

class TypeApi {
  async getAllTypes() {
    return axios.get(`${BASE_URL}/type/`)
  }

  async getTypeById(idType: number) {
    return axios.get(`${BASE_URL}/type/${idType}`)
  }
}

const typeApi = new TypeApi();
export default typeApi;