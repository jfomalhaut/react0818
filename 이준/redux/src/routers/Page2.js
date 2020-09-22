import React from 'react';
import { useSelector } from 'react-redux';

const Page2 = () => {
	const count = useSelector(({ countReducer }) => countReducer.count);
	return (
		<div>
			<h1>Page2 Component, count: {count}</h1>
		</div>
	);
};

export default Page2;
