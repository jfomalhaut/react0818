import React, { useReducer } from 'react';
import st from 'styled-components';
import { useInput } from '../customs/useInput';
import countReducer, { onAddCustom, onDecrease, onIncrease } from '../reducers/countReducer';

const Button = st.div`
	font-size: 30px;
	border: 1px solid #ddd;
	padding: 5px 10px;
	background: ${props => props.color};
	color: ${props => props.color === 'yellowgreen' ? 'black' : 'white'};
	outline: none;
	display: inline-block;
	cursor: pointer;
	user-select: none;
	margin: 10px;
	
	&:hover{
		
	}
`;

const Reducer2 = () => {
	// useReducer: 앞에는 reducer, 뒤에는 초기값
	const [count, dispatch] = useReducer(countReducer, 0);
	const [number, onChangeNumber, setNumber] = useInput("");

	const increase = () => {
		dispatch(onIncrease());
	};

	const decrease = () => {
		dispatch(onDecrease());
	};

	const addCustom = () => {
		dispatch(onAddCustom(number));
		setNumber("");
	};

	return (
		<div>
			<Button color="tomato" onClick={increase}>increase</Button>
			<Button color="yellowgreen" onClick={decrease}>decrease</Button>
			<Button color="black" onClick={addCustom}>임의값추가</Button>
			<input value={number} onChange={onChangeNumber} />
			<h1>{count}</h1>
		</div>
	);
};

export default Reducer2;
