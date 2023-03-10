import { ADD_TO_CART, GET_CART_ITEMS, DELETE_CART_ITEMS, DELETE_ALL_CART_ITEMS } from '../constants/sellerActionTypes'

export default (products = [], action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return action.products;
        // case LIKE:
        //     return products.map((post) => (post._id === action.payload._id ? action.payload : post));
        case ADD_TO_CART:
            return [...products, action.payload];
        case DELETE_ALL_CART_ITEMS:
            return [];
        case DELETE_CART_ITEMS:
            return products.filter((product) => product._id !== action.products);
        default:
            return products;
    }
};

