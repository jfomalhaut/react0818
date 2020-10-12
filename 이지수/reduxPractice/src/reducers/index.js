import { cartReducer } from './cartReducer';
import { listReducer } from './listReducers';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cartReducer,
    listReducer
})

export { rootReducer }
