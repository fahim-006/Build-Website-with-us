import { SAVE_PAYMENT_METHOD } from "../constants/PaymentMethodConstant";

export const PaymentMethodReducer = (state = {Items: []}, action) => {
    switch (action.type){
        case SAVE_PAYMENT_METHOD:
            return { ...state, PaymentMethod: action.payload };
        default:
            return state;
    }
}