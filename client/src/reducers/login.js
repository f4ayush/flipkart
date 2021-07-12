import { LOGOUT } from '../constants/sellerActionTypes'
export default (state = { authData: null }, action) => {
    switch (action.type) {
        case 'signUpSeller':
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action.data, loading: false, errors: null };
        case 'loginSeller':
            // return action.payload;
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action.data, loading: false, errors: null };
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null, loading: false, errors: null };
        default:
            return state;
    }
}