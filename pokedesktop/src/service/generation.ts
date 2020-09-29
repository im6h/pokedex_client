import BASE_URL from "./ApiEndpoint";
import axios from "axios";

class GenerationApi {
  async getAllGeneration() {
    return axios.get(`${BASE_URL}/generation/`);
  }

  async getGenerationById(idGen: string) {
    return axios.get(`${BASE_URL}/generation/${idGen}`);
  }
}

const generationApi = new GenerationApi();
export default generationApi;
