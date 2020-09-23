import React, { useState } from 'react';
import { Count } from '../actions';
import { useDispatch } from 'react-redux';

const useInput = (initial) => {
    const [data, setData] = useState(initial);
    const onInput = e => {
        const { target: { value } } = e;
        setData(value);
    }
    return [data, onInput];
}

const Page2 = (props) => {
    const dispatch = useDispatch();
    const [number, handleChange] = useInput('');

    const onDecrease = () => {
        dispatch(Count.decrease());
    }

    const onRandom = () => {
        dispatch(Count.random(number));
    }

    return (
        <div>
            <h1>page2</h1>
            <button onClick={onDecrease}>감소</button>
            <input value={number} onChange={handleChange} />
            <button onClick={onRandom}>임의값 추가</button>
        </div>
    )
}

export default Page2;
