import { SAVE_TOTAL_PAGES } from "../constants/TotalpageConstant";

export const TotalPageReducer = (state = {Items: []}, action) => {
    switch (action.type){
        case SAVE_TOTAL_PAGES:
            return { ...state, TotalPage: action.payload };
        default:
            return state;
    }
}