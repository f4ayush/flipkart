import * as api from '../api/index'
import { SELLER_PRODUCTS } from '../constants/sellerActionTypes'

export const allProducts = (id) => async (dispatch) => {
    try {
        const { data } = await api.sellerProducts(id)
        const action = { type: SELLER_PRODUCTS, products: data }
        // console.log(products)
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}