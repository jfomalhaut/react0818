import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListStyle, Button } from '../style/style';
import { CartItem } from '../components';
import { CartAction } from '../actions';

const Cart = () => {
    const dispatch = useDispatch();
    const cartList = useSelector(({ cartReducer }) => cartReducer.cart);

    useEffect(() => {
        dispatch(CartAction.onMount());
    }, [])

    const handleRemoveButton = () => {
        dispatch(CartAction.onRemoveChecked());
    }

    const handleRemoveAll = () => {
        dispatch(CartAction.onRemoveAll());
    }

    const handleCheckAll = () => {
        dispatch(CartAction.onCheckAll());
    }

    return (
        <>
            <Button onClick={handleRemoveButton}>선택한 상품 삭제</Button>
            <Button onClick={handleRemoveAll}>전체 상품 삭제</Button>
            <Button onClick={handleCheckAll}>전체 상품 선택</Button>
            <ListStyle>{
                cartList.map(item =>
                    <CartItem item={item} key={`cart${item.id}`} ></CartItem>)
            }
            </ListStyle>
        </>
    )
};

export default Cart;
