import React from 'react';
import { useDispatch } from 'react-redux';
import { Item, Checkbox, Button } from '../style/style';
import { CartAction } from '../actions';

const CartList = ({ item: { name, id, check, price, src } }) => {
    const dispatch = useDispatch();

    const handleClickRemove = (id) => {
        dispatch(CartAction.onRemove(id))
    }

    const handleCheck = (id) => {
        dispatch(CartAction.onCheck(id))
    }

    return (
        <Item>
            <Checkbox className={check ? 'checked' : ''} />
            <img src={src} onClick={() => { handleCheck(id) }} />
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>
            <Button onClick={() => { handleClickRemove(id) }}>삭제하기</Button>
        </Item>
    )
}

export default CartList;
