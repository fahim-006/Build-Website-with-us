import { SAVE_TOTAL_PAGES } from "../constants/TotalpageConstant";

export const savePagePrice = (data) => (dispatch) => {
    dispatch({ type: SAVE_TOTAL_PAGES, payload: data });
    localStorage.setItem('totalPage', JSON.stringify(data));
  };