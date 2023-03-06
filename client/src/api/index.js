import axios from 'axios'

// const API = axios.create({ baseURL: 'https://flipkart-5zfu.vercel.app' })
const API = axios.create({ baseURL: 'http://localhost:8000' })

export const createSeller = (sellerData) => API.post('/seller/signUp', sellerData)
export const logInSeller = (sellerData) => API.post('/seller/login', sellerData)

export const createBuyer = (buyerData) => API.post('/buyer/signUp', buyerData)
export const logInBuyer = (buyerData) => API.post('/buyer/login', buyerData)

export const allProducts = () => API.get('/products')

export const getProduct = (productId) => API.get('/products/'+productId,)
export const addProduct = (sellerData) => API.post('/products', sellerData)
export const deleteProduct = (productDetails) => API.post('/seller/deleteProduct', productDetails)
export const editProduct = (productDetails) => API.post('/seller/editProduct', productDetails)

export const sellerProducts = (userId) => API.post('/seller/sellerProducts', { userId })
