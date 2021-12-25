import { SAVE_SELECTED_TYPE } from "../constants/SelectedTypeConstant";

export const saveSelectedType = (data) => (dispatch) => {
    dispatch({ type: SAVE_SELECTED_TYPE, payload: data });
    localStorage.setItem('TypeName', JSON.stringify(data));
  };