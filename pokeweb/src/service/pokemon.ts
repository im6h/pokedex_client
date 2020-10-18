import { API_URL } from 'src/config/contraints'
import axios from 'axios'

const limit = 100
class Pokemon {
	async getPokemons(offset: number) {
		return axios.get(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`)
	}

	async getPokemon(id: number) {
		return axios.get(`${API_URL}/pokemon/${id}`)
	}
}
export default new Pokemon()