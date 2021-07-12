import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const createSeller = (sellerData) => API.post('/seller/signUp', sellerData)
export const logInSeller = (sellerData) => API.post('/seller/login', sellerData)