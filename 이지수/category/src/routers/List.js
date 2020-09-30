import React, { useEffect, useState } from 'react'
import Items from '../jsons/items.json'

const nf = new Intl.NumberFormat()
const CONFIRM_KEY = process.env.CONFIRM_KEY

const List = ({ match: { params: { category } } }) => {
    console.log(CONFIRM_KEY)
    const [items, setItem] = useState([])

    const transType = cate => {
        switch (cate) {
            case 'fish': return 1;
            case 'fruit': return 2;
            case 'vegetable': return 3;
        }
    }

    const transLabel = type => {
        switch (type) {
            case 1: return '수산물';
            case 2: return '청과';
            case 3: return '야채';
        }
    }

    useEffect(() => {
        if (category === 'all') {
            setItem(Items)
            return
        }

        const type = transType(category)
        const temp = Items.filter(item => item.type === type)
        setItem(temp)

    }, [category])

    return (
        <div className='container'>
            <div className='items'>
                {items.map(item => (
                    <div className='item'>
                        <div className={`img color${item.type}`} />
                        <div className='info'>
                            <div className='top'>
                                <span className={`type border${item.type}`}>{transLabel(item.type)}</span>
                                <span className='name'>{item.name}</span>
                            </div>
                        </div>
                        <div className='price'>{nf.format(item.price)}원</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List
