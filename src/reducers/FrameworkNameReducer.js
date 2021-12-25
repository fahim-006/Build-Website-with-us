import { SAVE_FRAMEWORK_NAME } from "../constants/FrameworkNameConstants";


export const FrameworkNameReducer = (state = {Items: []}, action) => {
    switch (action.type){
        case SAVE_FRAMEWORK_NAME:
            return { ...state, frameworkName: action.payload };
        default:
            return state;
    }
}