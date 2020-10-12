import countReducer from './countReducer';
import listReducer from './listReducer';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ countReducer, cartReducer, listReducer })

export default rootReducer;
