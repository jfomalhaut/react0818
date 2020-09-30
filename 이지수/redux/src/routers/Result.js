import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
    const count = useSelector(({ countReducer }) => { return countReducer.count })

    return (
        <>
            <h1>Result</h1>
            <h2>{count}</h2>
        </>
    )
};

export default Result;
