import React from 'react';
import { Button, Checkbox, Item } from '../style/style';
const nf = new Intl.NumberFormat();
import { Cart } from '../actions';
import { useDispatch } from 'react-redux';

const ListItem = ({ handleCheck, item, item: { name, price, check, id, src } }) => {
    const dispatch = useDispatch();

    const onCart = () => {
        dispatch(Cart.addCart(item));
    };

    return (
        <Item className='item'>
            <Checkbox className={`checkbox ${check ? 'checked' : ''}`}></Checkbox>
            <img src={src} onClick={() => { handleCheck(id) }} />
            <div>
                <p>{name}</p>
                <p>{price}원</p>
            </div>
            <Button onClick={onCart}>담기</Button>
        </Item>
    );

};

export default ListItem;
