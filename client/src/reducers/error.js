import { RESET_LOGIN_ERROR_MESSAGE, LOGIN_FAILURE } from '../constants/sellerActionTypes'


export default (message = "", action) => {
    switch (action.type) {
        case RESET_LOGIN_ERROR_MESSAGE:
            return "";
        case LOGIN_FAILURE:
            return action.message;
        default:
            return message;
    }
};

