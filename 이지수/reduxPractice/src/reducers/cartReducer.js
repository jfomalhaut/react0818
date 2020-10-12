import { CartAction } from '../actions';

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartAction.ADD_CART: {
            const added = state.cart.concat(action.item);
            const newList = Array.from(new Set(added));
            return {
                ...state,
                cart: newList
            }
        }
        case CartAction.REMOVE_CART: {
            const newArray = state.cart.filter(item =>
                item.id !== action.id)
            console.log(action.id, newArray);
            return {
                ...state,
                cart: newArray
            }
        }
        default: {
            return state;
        }
    }
}

export { cartReducer };
