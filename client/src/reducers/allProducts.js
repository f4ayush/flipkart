import { ALL_PRODUCTS } from '../constants/sellerActionTypes'
export default (state = [], action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            return [...action.products];
        default:
            return state;
    }
}