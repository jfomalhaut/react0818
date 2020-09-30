import { Check } from '../actions/index';
import Items from '../json/fishes.json';

const initialData = {
    list: Items,
    checked: []
}

const listReducer = (state = initialData, action) => {
    switch (action.type) {
        case Check.ON_CHECK: {
            return {
                ...state,
                list: state.list.map(item =>
                    item.id === action.id ? ({ ...item, check: !item.check }) : item
                )
            }
        }
        case Check.ON_CART: {
            return {
                ...state,
                checked: state.list.filter(item =>
                    item.check)
            }
        }

        default: {
            return state
        }
    }
}

export default listReducer;
