import * as api from '../api/index'
import { GET_PRODUCT } from '../constants/sellerActionTypes'

export const getProduct = (key) => async (dispatch) => {
    try {
        const { data } = await api.getProduct(key)
        const action = { type: GET_PRODUCT, product: data }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}