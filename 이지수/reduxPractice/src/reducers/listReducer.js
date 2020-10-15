import { ListAction } from '../actions';
import Items from '../json/fishes.json';

const initialState = {
    list: Items
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ListAction.ON_MOUNT: {
            const newList = state.list.map(item =>
                ({ ...item, check: false }));
            return {
                ...state,
                list: newList
            }
        }
        case ListAction.ON_CHECK: {
            const newList = state.list.map(item =>
                item.id === action.id
                    ? { ...item, check: !item.check }
                    : item
            );
            return {
                ...state,
                list: newList
            };
        }
        default: {
            return state;
        }
    }
};

export { listReducer };
