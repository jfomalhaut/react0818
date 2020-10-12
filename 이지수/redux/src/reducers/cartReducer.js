import { Cart } from '../actions';

const initialData = {
    cart: []
}

const cartReducer = (state = initialData, action) => {
    switch (action.type) {
        case Cart.ADD_CART: {
            const added = state.cart.concat(action.item);
            const newArray = Array.from(new Set(added));

            return {
                ...state,
                cart: newArray
            }
        }
        default: {
            return state
        }
    }
}

export default cartReducer;
