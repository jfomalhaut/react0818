
// 일에 대한 정의
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const ADD_CUSTOM = 'ADD_CUSTOM';

// Actions
export const onIncrease = () => ({ type: INCREASE });
export const onDecrease = () => ({ type: DECREASE });
export const onAddCustom = (value) => ({ type: ADD_CUSTOM, value });

// reducer
// state : 초기값.
// actions: 우리가 보내는 값.
const countReducer = (state, { type, value }) => { 
	switch (type) {
		case INCREASE: {
			return state + 1;
		}
		
		case DECREASE: {
			return state - 1;
		}

		case ADD_CUSTOM: {
			return state + value * 1;
		}

		default: return state;
	}
};

export default countReducer;