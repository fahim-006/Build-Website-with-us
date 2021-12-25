import { SAVE_UIUX_DATA } from "../constants/UIUXConstant";

export const UIUXReducer = (state = {Items: []}, action) => {
    switch (action.type){
        case SAVE_UIUX_DATA:
            return { ...state, UIUX: action.payload };
        default:
            return state;
    }
}