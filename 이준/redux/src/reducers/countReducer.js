import { Count } from '../actions';

const initialState = {
	count: 0
};

const countReducer = (state = initialState, action) => {
	switch(action.type) {
		case Count.INCREASE: {
			return {
				...state,
				count: state.count + 1
			}
		}
		default: return state;
	}
};

export default countReducer;