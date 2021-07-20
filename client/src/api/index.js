import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const createSeller = (sellerData) => API.post('/seller/signUp', sellerData)
export const logInSeller = (sellerData) => API.post('/seller/login', sellerData)

export const createBuyer = (buyerData) => API.post('/buyer/signUp', buyerData)
export const logInBuyer = (buyerData) => API.post('/buyer/login', buyerData)

export const allProducts = () => API.get('/seller/allProducts')

export const addProduct = (sellerData) => API.post('/seller/addProduct', sellerData)
export const deleteProduct = (productDetails) => API.post('/seller/deleteProduct', productDetails)

export const sellerProducts = (userId) => API.post('/seller/sellerProducts', { userId })