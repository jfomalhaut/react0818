import React, { useState } from 'react';
import { useInput } from '../customs/useInput';

const Input = () => {
	const [name, onChangeName, setName] = useInput("");
	const [email, onChangeEmail, setEmail] = useInput("");
	const [list, setList] = useState([]);

	const insert = () => {
		const newList = list.concat({ name, email });
		setList(newList);
		setName("");
		setEmail("");
	};

	return (
		<div>
			<input value={name} onChange={onChangeName} /> <br/>
			<input value={email} onChange={onChangeEmail} /> <button onClick={insert}>입력</button>
			{/* <h1>{name}</h1>
			<h1>{email}</h1> */}
			<ul>
				{list.map(item => (
					<li>{item.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Input;