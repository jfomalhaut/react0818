import React, { useState, useEffect } from 'react';
import Items from '../json/fishes.json';

const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridGap: '25px',
    margin: '50px auto',
    width: '1000px'
}

//item reducer로 버튼들 함수 실행하기, style component로 바꾸기.

const Reducer = () => {
    const [list, setList] = useState([]);

    const onCheck = id => { };

    const onCheckAll = () => { };

    const onDeleteAll = () => { };

    const onDeleteChecked = () => { };

    const onDelete = id => { };

    useEffect(() => {
        setList(Items);
    }, []);

    return (
        <div className='container'>
            <button onClick={onCheckAll}>전체선택</button>
            <button onClick={onDeleteAll}>전체삭제</button>
            <button onClick={onDeleteChecked}>선택삭제</button>

            <div className='list' style={listStyle}>
                {list.map((item, index) => (
                    <div className='item' key={`item${index}`}>
                        <span className={`checkbox ${item.check ? 'checked' : ''}`} />
                        <img src={item.src} style={{ width: '100%' }} onClick={() => { onCheck(item.id) }} />
                        <div>
                            <div className='name'>{item.name}</div>
                            <div className='price'>{item.price}</div>
                            <button onClick={() => { onDelete(item.id) }}>삭제</button>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
};

export default Reducer;
