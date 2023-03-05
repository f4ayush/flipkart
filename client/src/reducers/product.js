import { GET_PRODUCT } from '../constants/sellerActionTypes'


export default (product = {}, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return action.product;
        // case LIKE:
        //     return products.map((post) => (post._id === action.payload._id ? action.payload : post));
        // case CREATE:
        //     return [...products, action.payload];
        // case UPDATE:
        //     return products.map((post) => (post._id === action.payload._id ? action.payload : post));
        // case DELETE:
        //     return products.filter((post) => post._id !== action.payload);
        default:
            return product;
    }
};

