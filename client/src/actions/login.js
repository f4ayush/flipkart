import * as api from '../api/index'

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