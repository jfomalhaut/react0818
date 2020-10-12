import React from 'react';
import { useDispatch } from 'react-redux';
import { Item, Checkbox, Button } from '../css/style';
import { CartAction } from '../actions';

const nf = new Intl.NumberFormat();

const CartItem = ({ item: { name, id, check, src, price } }) => {
    const dispatch = useDispatch();

    const onRemoveCart = (id) => {
        dispatch(CartAction.removeCart(id));
    }

    return (
        <Item>
            <Checkbox className={`checkbox ${check ? 'checked' : ''}`} />
            <img src={src} />
            <div>
                <p>{name}</p>
                <p>{nf.format(price)}원</p>
            </div>
            <Button onClick={() => { onRemoveCart(id) }}>삭제</Button>
        </Item>
    )
};

export default CartItem;
