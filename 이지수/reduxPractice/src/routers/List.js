import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListStyle, Button } from '../style/style';
import { ListItem } from '../components';
import { ListAction, CartAction } from '../actions';

const List = () => {
    const dispatch = useDispatch();
    const list = useSelector(({ listReducer }) => listReducer.list);

    const handleCheck = (id) => {
        dispatch(ListAction.onCheck(id));
    }

    const handleAddChecked = () => {
        const checked = list.filter(item => item.check)
        dispatch(CartAction.onAddChecked(checked));
    }

    const handleAdd = () => {
        dispatch(CartAction.onAdd())
    }

    return (
        <>
            <Button onClick={handleAddChecked}>선택한 상품 담기</Button>
            <ListStyle>
                {list.map(item =>
                    <ListItem key={item.id} item={item} handleAdd={handleAdd} handleCheck={handleCheck}></ListItem>)}
            </ListStyle>
        </>
    );
};

export default List;
