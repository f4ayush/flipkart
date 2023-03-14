import { combineReducers } from "redux";
import user from './user'
import allProducts from './allProducts'
import sellerProducts from "./sellerProducts";
import product from "./product";
import cart from "./cart";
import error from "./error";

export default combineReducers({
    user,
    allProducts,
    sellerProducts,
    product,
    cart,
    error
})