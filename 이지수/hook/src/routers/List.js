import React, { useEffect, useState } from 'react';
import Items from '../json/fishes.json';
import './List.css';

const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridGap: '25px',
    margin: '50px auto',
    width: '1000px'
}

let checkAll = false;

const List = () => {
    const [list, setList] = useState([]);

    const onCheck = id => {
        const newList = list.map(item => {
            if (item.id === id) {
                return ({ ...item, check: !item.check });
            } else {
                return item;
            }
        });
        setList(newList);
    };

    const onDelete = id => {
        const index = list.findIndex(item => {
            return item.id === id
        })

        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    const onDeleteChecked = () => {
        const newList = list.filter(
            li => !li.check
        )
        setList(newList);
    }

    const onCheckAll = () => {
        const newList = list.map(
            li => {
                if (checkAll) {
                    return ({ ...li, check: !li.check })
                } else {
                    return ({ ...li, check: true })
                }
            })
        checkAll = !checkAll;
        setList(newList);
    }

    const onDeleteAll = () => {
        const newList = [];
        setList(newList);
    }

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
}

export default List;
