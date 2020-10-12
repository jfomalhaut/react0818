import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListStyle, Button } from '../css/style';
import { ListItem } from '../components';
import Items from '../json/fishes.json';
import { CartAction, ListAction } from '../actions';

const List = () => {
    const list = useSelector(({ listReducer }) => listReducer.list);

    const dispatch = useDispatch();

    const onAddChecked = () => {
        const newList = list.filter(item => item.check);
        dispatch(CartAction.addCart(newList));
    }

    const handleClick = (id) => {
        dispatch(ListAction.onCheck(id));
    }

    const onDeleteAll = () => {
        dispatch(ListAction.onDeleteAll());
    }

    const onDeleteChecked = () => {
        const newList = list.filter(item => !item.check);
        dispatch(ListAction.onDeleteChecked(newList));
    }

    return (
        <>
            <Button onClick={onDeleteAll}>전체 상품 삭제</Button>
            <Button onClick={onDeleteChecked}>선택한 상품 삭제</Button>
            <Button onClick={onAddChecked}>선택한 상품 담기</Button>
            <ListStyle>
                {list.map(item => (
                    <ListItem key={item.id} item={item} handleClick={handleClick}
                    />)
                )}
            </ListStyle>
        </>
    )
};

export default List;
