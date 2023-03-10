import * as api from '../api/index'
import axios from 'axios';
import { DELETE_CART_ITEMS, ADD_TO_CART, GET_CART_ITEMS } from '../constants/sellerActionTypes'

export const addToCart = (product) => async (dispatch) => {
    try {
        const { data } = await api.addToCart(product)
        const action = { type: ADD_TO_CART, product: data }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}

export const getCartItems = () => async (dispatch) => {
    try {
        const { data } = await api.getCartItems()
        const action = { type: GET_CART_ITEMS, products: data.items }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}

export const deleteCartItems = (productId) => async (dispatch) => {
    try {
        const { data } = await api.deleteCartItems(productId)
        const action = { type: DELETE_CART_ITEMS, products: productId }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}