import { Count } from '../actions';

const initialValue = {
    count: 0
}
const countReducer = (state = initialValue, action) => {
    switch (action.type) {
        case Count.ON_INCREASE: {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case Count.ON_DECREASE: {
            return {
                ...state,
                count: state.count - 1
            }
        }
        default: return state;
    }
}

export default countReducer;
