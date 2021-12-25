import { SAVE_UIUX_DATA } from "../constants/UIUXConstant";

export const saveUIUX = (data) => (dispatch) => {
    dispatch({ type: SAVE_UIUX_DATA, payload: data });
    localStorage.setItem('uiux', JSON.stringify(data));
  };