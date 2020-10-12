import React from 'react';
import { useDispatch } from 'react-redux';
import { CartAction } from '../actions';
import { Button, Checkbox, Item } from '../css/style';

const nf = Intl.NumberFormat();

const ListItem = ({ handleClick, item, item: { name, price, check, id, src } }) => {
    const dispatch = useDispatch();

    const onAdd = () => {
        dispatch(CartAction.addCart(item))
    }

    return (
        <Item>
            <Checkbox className={`checkbox ${check ? 'checked' : ''}`} />
            <img src={src} onClick={() => { handleClick(id) }} />
            <div>
                <p>{name}</p>
                <p>{nf.format(price)}원</p>
            </div>
            <Button onClick={onAdd} >담기</Button>
        </Item>
    )
};

export default ListItem;
