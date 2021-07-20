import * as api from '../api/index'
import { DELETE, SELLER_PRODUCTS } from '../constants/sellerActionTypes'

export const products = (id) => async (dispatch) => {
    try {
        console.log(id)
        const { data } = await api.sellerProducts(id)
        const action = { type: SELLER_PRODUCTS, products: data }
        // console.log(products)
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = (sellerId, productId) => async (dispatch) => {
    try {
        const { data } = await api.deleteProduct({ sellerId, productId })
        const action = { type: DELETE, key: data }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}