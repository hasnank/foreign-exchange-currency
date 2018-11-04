import {combineReducers} from 'redux';
// import UserReducer from './reducer-users';
// import ActiveUserReducer from './reducer-active-user';
import Currency from './currency-data';
import Active from './active-currency';
import Base from './base-value';
import DropDown from './drop-down-list';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    // users: UserReducer,
    // activeUser: ActiveUserReducer
    currencyData: Currency,
    activeCurrency: Active,
    baseValue: Base,
    dropDownList: DropDown
});

export default allReducers
