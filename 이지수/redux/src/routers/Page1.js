import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Count } from '../actions';
import countReducer from '../reducers/countReducer';

const Page1 = () => {
    const count = useSelector(({ countReducer }) => countReducer.count)

    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(Count.onIncrease());
    }

    const onDecrease = () => {
        dispatch(Count.onDecrease());
    }

    return (
        <>
            <h1>Page1</h1>
            <button onClick={onDecrease}>빼기-</button>
            <button onClick={onIncrease}>더하기+</button>
            <h2>{count}</h2>
        </>
    )
}

export default Page1;
