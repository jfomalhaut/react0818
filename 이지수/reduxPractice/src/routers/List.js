import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListStyle, Button } from '../style/style';
import { ListItem } from '../components';
import { ListAction, CartAction } from '../actions';

const List = () => {
    const dispatch = useDispatch();
    const list = useSelector(({ listReducer }) => listReducer.list);

    const onCheck = (id) => {
        dispatch(ListAction.onCheck(id));
    }

    const onAddChecked = () => {
        dispatch(CartAction.onAddChecked(list));
    }

    return (
        <>
            <Button onClick={onAddChecked}>선택한 상품 담기</Button>
            <ListStyle>
                {list.map(item =>
                    <ListItem key={item.id} item={item} onCheck={onCheck}></ListItem>)}
            </ListStyle>
        </>
    );
};

export default List;
