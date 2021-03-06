import * as api from '../api/index'
import { CREATE, DELETE, SELLER_PRODUCTS, UPDATE } from '../constants/sellerActionTypes'

export const products = (id) => async (dispatch) => {
    try {
        const { data } = await api.sellerProducts(id)
        const action = { type: SELLER_PRODUCTS, products: data }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = (sellerId, productId) => async (dispatch) => {
    try {
        const { data } = await api.deleteProduct({ sellerId, productId })
        const action = { type: DELETE, key: productId }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}

export const editProduct = (productDetails) => async (dispatch) => {
    try {
        const { data } = await api.editProduct(productDetails)
        const action = { type: UPDATE, payload: data }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}

export const addProduct = (productDetails) => async (dispatch) => {
    try {
        const { data } = await api.addProduct(productDetails)
        const action = { type: CREATE, payload: data }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}