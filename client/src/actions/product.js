import * as api from '../api/index'
import { GET_PRODUCT } from '../constants/sellerActionTypes'

export const getProduct = (productId) => async (dispatch) => {
    try {
        console.log(productId)
        const { data } = await api.getProduct(productId)
        const action = { type: GET_PRODUCT, product: data }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}