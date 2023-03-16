import { combineReducers } from "redux";
import user from './user'
import allProducts from './allProducts'
import product from "./product";
import cart from "./cart";
import error from "./error";
import searchProducts from "./searchProducts";

export default combineReducers({
    user,
    allProducts,
    product,
    cart,
    searchProducts,
    error
})