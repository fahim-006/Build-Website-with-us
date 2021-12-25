import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { FrameworkNameReducer } from './reducers/FrameworkNameReducer';
import { PaymentMethodReducer } from './reducers/PaymentMethodReducer';
import { SelectTypeReducer } from './reducers/SelectTypeReducer';
import { TotalPageReducer } from './reducers/TotalPageReducer';
import { UIUXReducer } from './reducers/UiuxReducer';

const initialState = {
    framework:{
        frameworkItems: localStorage.getItem('FrameworkName')
        ?JSON.parse(localStorage.getItem('FrameworkName'))
        : [],
    },
    selectedType:{
        selectedType: localStorage.getItem('TypeName')
        ?JSON.parse(localStorage.getItem('TypeName'))
        : [],
    },
    UIUXReducer:{
        UIUXReducer: localStorage.getItem('uiux')
        ?JSON.parse(localStorage.getItem('uiux'))
        : [],
    },
    PaymentMethod:{
        PaymentMethod: localStorage.getItem('paymentMethod')
        ?JSON.parse(localStorage.getItem('paymentMethod'))
        : [],
    },
    TotalPage:{
        TotalPage: localStorage.getItem('totalPage')
        ?JSON.parse(localStorage.getItem('totalPage'))
        : [],
    },
};

const reducer = combineReducers({
    framework: FrameworkNameReducer,
    selectedType: SelectTypeReducer,
    UIUXReducer: UIUXReducer,
    PaymentMethod: PaymentMethodReducer,
    TotalPage: TotalPageReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;