import React from 'react';
import { useSelector } from 'react-redux';
import { ListStyle, Item, Button } from '../style/style';
import { nf } from '../utils/const';

const Cart = () => {
    const checkedList = useSelector(({ listReducer }) => listReducer.checked);

    return (
        <ListStyle>
            {checkedList.map((li, i) =>
                <Item key={`item${i}`}>
                    <img src={li.src} style={{ width: '100%' }}
                        onClick={() => { handleCheck(li.id) }} />
                    <div className='info'>
                        <p className='name'>{li.name}</p>
                        <p className='price'>{nf.format(li.price)}원</p>
                    </div>
                    <Button>삭제하기</Button>
                </Item>
            )}
        </ListStyle>
    )
}

export default Cart;
