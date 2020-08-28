import BASE_URL from "../ApiEndpoint";
import axios from 'axios'

class GenerationApi {
  async getAllGeneration(offset: number, limit: number) {
    return axios.get(`${BASE_URL}/generation/?offset=${offset}&limit=${limit}`)
  }

  async getGenerationById(idGen: number) {
    return axios.get(`${BASE_URL}/generation/${idGen}`)
  }
}

const generationApi = new GenerationApi();
export default generationApi;