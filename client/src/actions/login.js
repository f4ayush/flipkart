import * as api from '../api/index'
import { LOGIN_BUYER, SIGNUP_BUYER } from "../constants/sellerActionTypes";

export const login = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.logInSeller(formData)
        const action = { type: 'loginSeller', data }
        dispatch(action)
        history.push('/seller')
    } catch (error) {
        console.log(error)
    }

}

export const loginBuyer = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.logInBuyer(formData)
        const action = { type: LOGIN_BUYER, data }
        dispatch(action)
        history.push('/')
    } catch (error) {
        console.log(error)
    }

}

export const signUp = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.createSeller(formData)
        const action = { type: 'signUpSeller', data }
        dispatch(action)
        history.push('/seller')
    } catch (error) {
        console.log(error)
    }

}

export const signUpBuyer = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.createBuyer(formData)
        const action = { type: SIGNUP_BUYER, data }
        dispatch(action)
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}