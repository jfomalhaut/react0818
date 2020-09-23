import { Count } from '../actions/index';

const initialState = {
    count: 0
};

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case Count.INCREASE: {
            return {
                ...state,
                count: state.count + 1
            };
        }
        case Count.DECREASE: {
            return {
                ...state,
                count: state.count - 1
            }
        }
        case Count.RANDOM: {
            return {
                ...state,
                count: state.count + action.value * 1
            }
        }
        default: return state;
    }
};

export default countReducer;
