import { SELLER_PRODUCTS } from '../constants/sellerActionTypes'
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/sellerActionTypes';

export default (products = [], action) => {
    switch (action.type) {
        case SELLER_PRODUCTS:
            return action.products;
        // case LIKE:
        //     return products.map((product) => (product._id === action.payload._id ? action.payload : product));
        // case CREATE:
        //     return [...products, action.payload];
        case UPDATE:
            return products.map((product) => (product._id === action.payload._id ? action.payload : product));
        case DELETE:
            return products.filter((product) => product.key !== action.key);
        default:
            return products;
    }
};

