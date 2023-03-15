import { SELLER_PRODUCTS } from '../constants/actionTypes'
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (products = [], action) => {
    switch (action.type) {
        case SELLER_PRODUCTS:
            return action.products;
        case CREATE:
            return [...products, action.payload];
        case UPDATE:
            return products.map((product) => {
                return product.key === action.payload.key ? action.payload : product
            });
        case DELETE:
            return products.filter((product) => product.key !== action.key);
        default:
            return products;
    }
};

