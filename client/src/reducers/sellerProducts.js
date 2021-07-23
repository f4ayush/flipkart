import { SELLER_PRODUCTS } from '../constants/sellerActionTypes'
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/sellerActionTypes';

export default (products = [], action) => {
    switch (action.type) {
        case SELLER_PRODUCTS:
            alert("x")
            return action.products;
        case CREATE:
            alert("xx")
            return [...products, action.payload];
        case UPDATE:
            alert("a")
            return products.map((product) => {
                return product.key === action.payload.key ? action.payload : product
            });
        case DELETE:
            return products.filter((product) => product.key !== action.key);
        default:
            alert("b")
            return products;
    }
};

