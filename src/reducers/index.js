import { combineReducers } from 'redux';
import updateTotal from "./reducer_discount";
const rootReducer = combineReducers({
	total: updateTotal
});

export default rootReducer;