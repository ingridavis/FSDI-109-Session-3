
import { combineReducers } from 'redux';
import cartCounterReducer from './cartCounter';

const rootReducer = combineReducers({
   count: cartCounterReducer, 
});

export default rootReducer;
