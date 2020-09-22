import React from 'react';
import { useDispatch } from 'react-redux';
import { Count } from '../actions';

const Page1 = () => {
	const dispatch = useDispatch();

	const onIncrease = () => {
		dispatch(Count.increase());
	};

	return (
		<div>
			<h1>Page1 Component</h1>
			<button onClick={onIncrease}>증가+</button>
		</div>
	);
};

export default Page1;
