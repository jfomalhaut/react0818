import { CartAction } from '../actions';

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartAction.ON_MOUNT: {
            const newList = state.cart.map(item => (
                { ...item, check: false }
            ))
            return {
                ...state,
                cart: newList
            }
        }
        case CartAction.ON_CHECK: {
            const newList = state.cart.map(item =>
                item.id === action.id
                    ? ({ ...item, check: !item.check })
                    : item
            )
            return {
                ...state,
                cart: newList
            }
        }
        case CartAction.ON_ADD: {
            const added = state.cart.concat(action.item);
            const newList = Array.from(new Set(added));
            return {
                ...state,
                cart: newList
            }
        }
        case CartAction.ON_ADD_CHECKED: {
            const checked = action.list.filter(item => item.check);
            const added = state.cart.concat(checked);

            const newList = Array.from(new Set(added));
            return {
                ...state,
                cart: newList
            }
        }
        case CartAction.ON_REMOVE: {
            const newList = state.cart.filter(item => item.id !== action.id);
            return {
                ...state,
                cart: newList
            }
        }
        case CartAction.ON_REMOVE_CHECKED: {
            const newList = state.cart.filter(item => !item.check)
            return {
                ...state,
                cart: newList
            }
        }
        case CartAction.ON_REMOVE_ALL: {
            return {
                ...state,
                cart: []
            }
        }
        case CartAction.ON_CEHCK_ALL: {
            const check = state.cart.some(item => !item.check);
            const newList = state.cart.map(item =>
                ({ ...item, check }))
            return {
                ...state,
                cart: newList
            }
        }
        default: {
            return state
        }
    }
};

export { cartReducer };
