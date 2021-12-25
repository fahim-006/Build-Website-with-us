import { SAVE_PAYMENT_METHOD } from "../constants/PaymentMethodConstant";

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({ type: SAVE_PAYMENT_METHOD, payload: data });
    localStorage.setItem('paymentMethod', JSON.stringify(data));
  };