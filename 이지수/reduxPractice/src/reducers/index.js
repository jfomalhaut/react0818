import { combineReducers } from 'redux';
import { listReducer } from './listReducer';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
    listReducer,
    cartReducer
})

export { rootReducer };
