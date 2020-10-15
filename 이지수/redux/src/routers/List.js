import React, { useState } from 'react';
import { Button, ListStyle } from '../style/style';
import { useDispatch } from 'react-redux';
import { Check } from '../actions/index';
import { ListItem } from '../components';
import Items from '../json/fishes.json';

const List = () => {
    const [list, setList] = useState(Items);
    const dispatch = useDispatch();

    const handleCheck = (id) => {
        const newList = list.map(item => item.id === id ? ({ ...item, check: !item.check }) : item);
        setList(newList);
    }

    const handleCart = () => {
        dispatch(Check.onCart());
    }

    return (
        <div className='container'>
            <Button>전체 선택</Button>
            <Button>전체 선택 해제</Button>
            <Button onClick={handleCart}>선택 상품 장바구니에 담기</Button>
            <ListStyle>
                {list.map((item, index) => (
                    <ListItem handleCheck={handleCheck} item={item} index={index} key={item.id} />
                ))}
            </ListStyle>
        </div>
    )
}
export default List;
