import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Count } from '../actions';
import { useInput } from '../customs';

const Page = () => {
    const dispatch = useDispatch();
    const count = useSelector(({ countReducer }) => countReducer.count)
    const [num, handleInput, setNum] = useInput('');

    const onIncrease = () => {
        dispatch(Count.onIncrease(num));
        setNum('');
    }

    const onDecrease = () => {
        dispatch(Count.onDecrease(num));
        setNum('');
    }

    const handleInputNum = () => {
        dispatch(Count.onInputNum(num));
        setNum('');
    }

    return (
        <>
            <h1>Page</h1>
            <button onClick={onIncrease}>더하기</button>
            <button onClick={onDecrease}>빼기</button>
            <input value={num} onChange={handleInput} />
            <button onClick={handleInputNum}>임의값더하기</button>
            <h2>{count}</h2>
        </>
    )
}

export default Page;
