const ADD_CART = 'ADD_CART';
const REMOVE_CART = 'REMOVE_CART';

const addCart = (item) => ({ type: ADD_CART, item });
const removeCart = (id) => ({ type: REMOVE_CART, id });

const Cart = {
    ADD_CART,
    REMOVE_CART,
    addCart,
    removeCart
}

export { Cart };
