import countReducer from './countReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ countReducer })

export default rootReducer;
