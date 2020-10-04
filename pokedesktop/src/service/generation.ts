import BASE_URL from "./ApiEndpoint";
import axios, { AxiosResponse } from "axios";

class GenerationApi {
  async getAllGeneration(): Promise<AxiosResponse<any>> {
    return axios.get(`${BASE_URL}/generation/`);
  }

  async getGenerationById(idGen: string): Promise<AxiosResponse<any>> {
    return axios.get(`${BASE_URL}/generation/${idGen}`);
  }
}

const generationApi = new GenerationApi();
export default generationApi;
