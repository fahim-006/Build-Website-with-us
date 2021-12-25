import { SAVE_FRAMEWORK_NAME } from "../constants/FrameworkNameConstants";

export const saveFrameworkName = (data) => (dispatch) => {
    dispatch({ type: SAVE_FRAMEWORK_NAME, payload: data });
    localStorage.setItem('FrameworkName', JSON.stringify(data));
  };