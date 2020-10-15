import { Cart } from '../actions';

const initialState = {
	cart: []
};

const cartReducer = (state = initialState, action) => {
	switch(action.type) {
		case Cart.ADD_CART: {
			const ids = state.cart.map(item => item.id);
			const idx = ids.indexOf(action.item.id);
			const newList = idx === -1 ? state.cart.concat(action.item) : state.cart;
			return {
				...state,
				cart : newList
			};
		}
		case Cart.REMOVE_CART: {
			return state;
		}
		default: {
			return state;
		}
	}
};

export default cartReducer;