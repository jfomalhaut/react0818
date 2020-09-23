import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
    const count = useSelector(({ countReducer }) => countReducer.count);

    return (
        <h1>count:{count}</h1>
    )
}

export default Result;
