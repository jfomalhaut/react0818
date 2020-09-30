import { Count } from '../actions/index';

const initialData = {
    count: 0
}

const countReducer = (state = initialData, action) => {
    switch (action.type) {
        case Count.ON_INCREASE: {
            return {
                ...state,
                count: state.count + action.num * 1
            }
        }
        case Count.ON_DECREASE: {
            return {
                ...state,
                count: state.count - action.num * 1
            }
        }
        case Count.ON_INPUT_NUM: {
            return {
                ...state,
                count: state.count + action.num * 1
            }
        }
        default: {
            return state
        }
    }
}

export default countReducer;
