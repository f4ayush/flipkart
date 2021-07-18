import * as api from '../api/index'
import { ALL_PRODUCTS } from '../constants/sellerActionTypes'

export const allProducts = () => async (dispatch) => {
    try {
        const products = await api.allProducts()
        const action = { type: ALL_PRODUCTS, products }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}