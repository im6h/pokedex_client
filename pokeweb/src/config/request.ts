import axios from 'axios'
import { API_URL } from './contraints'

export const request = axios.create({
  baseURL: API_URL,
})
