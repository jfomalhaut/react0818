import React from 'react';
import { useDispatch } from 'react-redux';
import { Item, Checkbox, Button } from '../style/style';
import { CartAction } from '../actions';
import { nf } from '../utils/const';

const ListItem = ({ onCheck, item, item: { id, src, check, price, name } }) => {
    const dispatch = useDispatch();

    const onClickAdd = () => {
        dispatch(CartAction.onAdd(item));
    }

    return (
        <Item>
            <Checkbox className={check ? 'checked' : ''} />
            <img src={src} onClick={() => { onCheck(id) }} />
            <div>
                <p>{name}</p>
                <p>{nf.format(price)}원</p>
            </div>
            <Button onClick={onClickAdd}>담기</Button>
        </Item>
    )
};

export default ListItem;
