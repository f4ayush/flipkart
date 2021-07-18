import { combineReducers } from "redux";
import login from './login'
import allProducts from './allProducts'
import sellerProducts from "./sellerProducts";

export default combineReducers({
    login,
    allProducts,
    sellerProducts
})