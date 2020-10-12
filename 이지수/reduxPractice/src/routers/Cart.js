import React from 'react';
import { ListStyle } from '../css/style';
import { CartItem } from '../components';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector(({ cartReducer }) => cartReducer.cart);

    return (
        <ListStyle>
            {cart.map(item =>
                <CartItem item={item} key={item.id} />)}
        </ListStyle>
    )
};

export default Cart;
