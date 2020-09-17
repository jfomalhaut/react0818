import React, { useState, useReducer } from 'react';
import st from 'styled-components';
import countReducer, {
    onAddCustom, onDecrease, onIncrease
} from '../reducers/countReducers';

const Button = st.div`
    font-size:30px;
    border:1px solid #ddd;
    padding:5px 10px;
    background:${props => props.color};
    color:${props => props.color === 'yellowgreen' ? 'black' : 'white'};
    outline:none;
    display:inline-block;
    margin:10px;
`;

const useInput = (initialValue) => {
    const [data, setData] = useState(initialValue);

    const onInput = e => {
        const { target: { value } } = e;
        setData(value);
    }

    return [data, onInput]
}

const Reducer2 = () => {
    const [count, dispatch] = useReducer(countReducer, 0);
    const [number, onChangeNumber] = useInput('');

    const increase = () => {
        dispatch(onIncrease());
    };

    const decrease = () => {
        dispatch(onDecrease())
    };

    const custom = () => {
        dispatch(onAddCustom(number));
    };

    return (
        <div>
            <Button color="tomato" onClick={increase}>increase</Button>
            <Button color="yellowgreen" onClick={decrease}>decrease</Button>
            <Button color="black" onClick={custom}>임의값추가</Button>
            <input value={number} onChange={onChangeNumber}></input>
            <h1>{count}</h1>
        </div>
    )
};

export default Reducer2;
