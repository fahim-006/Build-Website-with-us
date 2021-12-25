import { SAVE_SELECTED_TYPE } from "../constants/SelectedTypeConstant";


export const SelectTypeReducer = (state = {Items: []}, action) => {
    switch (action.type){
        case SAVE_SELECTED_TYPE:
            return { ...state, selectedTypeName: action.payload };
        default:
            return state;
    }
}