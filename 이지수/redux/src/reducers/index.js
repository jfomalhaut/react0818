import countReducer from './countReducer';
import listReducer from './listReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({ countReducer, listReducer })

export default rootReducer;
