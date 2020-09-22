import React, { useReducer, useEffect, useState } from 'react';
import Items from '../json/fishes.json';
import { Button, Checkbox, ListStyle, Item } from '../style/style';
import { itemReducer, onCheck } from '../reducers/itemReducers';

//item reducer로 버튼들 함수 실행하기, style component로 바꾸기.

const Reducer = () => {
    const [list, dispatch] = useReducer(itemReducer, Items);

    const handleCheck = id => {
        dispatch(onCheck(id))
    };

    const handleCheckAll = () => { };

    const handleDeleteAll = () => { };

    const handleDeleteChecked = () => { };

    const handleDelete = id => { };

    useEffect(() => {
        console.log(list);
    }, [list])
    return (
        <div className='container'>
            <Button onClick={handleCheckAll}>전체선택</Button>
            <Button onClick={handleDeleteAll}>전체삭제</Button>
            <Button onClick={handleDeleteChecked}>선택삭제</Button>

            <ListStyle>
                {list.map((item, index) => (
                    <Item key={`item${index}`}>
                        <Checkbox className={`${item.check ? 'checked' : ''}`} />
                        <img src={item.src} style={{ width: '100%' }} onClick={() => { handleCheck(item.id) }} />
                        <div>
                            <div className='name'>{item.name}</div>
                            <div className='price'>{item.price}</div>
                            <Button onClick={() => { handleDelete(item.id) }}>삭제</Button>
                        </div>
                    </Item>
                ))
                }
            </ListStyle>
        </div>
    )
};

export default Reducer;
