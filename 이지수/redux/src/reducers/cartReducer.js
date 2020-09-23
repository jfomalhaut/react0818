import { Cart } from '../actions';

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case Cart.ADD_CART: {
            return state;
        }
        case Cart.REMOVE_CART: {
            return state;
        }
        default: {
            return state;
        }
    }
}

export default cartReducer;
