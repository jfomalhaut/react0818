import { combineReducers } from 'redux';
import countReducer from './countReducers';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    countReducer,
    cartReducer
});

export default rootReducer;
