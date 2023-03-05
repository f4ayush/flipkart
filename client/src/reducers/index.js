import { combineReducers } from "redux";
import login from './login'
import allProducts from './allProducts'
import sellerProducts from "./sellerProducts";
import product from "./product";

export default combineReducers({
    login,
    allProducts,
    sellerProducts,
    product
})