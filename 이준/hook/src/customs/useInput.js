import { useState } from 'react';

export const useInput = (initialValue) => {
	const [data, setData] = useState(initialValue);

	const onChange = (ev) => {
		const { target: { value } } = ev;
		setData(value);
	};

	return [data, onChange, setData];
};