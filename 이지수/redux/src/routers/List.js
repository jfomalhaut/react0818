import React, { useEffect } from 'react';
import { Button, Checkbox, ListStyle, Item } from '../style/style';
import { nf } from '../utils/const';
import { useDispatch, useSelector } from 'react-redux';
import { Check } from '../actions/index';

const List = () => {
    const dispatch = useDispatch();
    const list = useSelector(({ listReducer }) => listReducer.list);
    const checkedList = useSelector(({ listReducer }) => listReducer.checked);

    const handleCheck = (id) => {
        dispatch(Check.onCheck(id));
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
                {list.map((li, i) => (
                    <Item className='item' key={`item${i}`}>
                        <Checkbox className={`checkbox ${li.check ? 'checked' : ''}`}></Checkbox>
                        <img src={li.src} style={{ width: '100%' }}
                            onClick={() => { handleCheck(li.id) }} />
                        <div className='info'>
                            <p className='name'>{li.name}</p>
                            <p className='price'>{nf.format(li.price)}원</p>
                        </div>
                        <Button>삭제하기</Button>
                    </Item>
                ))}
            </ListStyle>
        </div>
    )
}
export default List;
