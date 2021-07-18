import { combineReducers } from "redux";
import login from './login'
import allProducts from './allProducts'

export default combineReducers({
    login,
    allProducts
})