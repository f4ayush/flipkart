import * as api from '../api/index'
import { ALL_PRODUCTS } from '../constants/sellerActionTypes'

export const allProducts = () => async (dispatch) => {
    try {
        const { data } = await api.allProducts()
        const action = { type: ALL_PRODUCTS, products: data }
        // console.log(products)
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}