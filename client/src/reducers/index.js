import { combineReducers } from "redux";
import user from './user'
import allProducts from './allProducts'
import sellerProducts from "./sellerProducts";
import product from "./product";

export default combineReducers({
    user,
    allProducts,
    sellerProducts,
    product
})