import React, { useState } from 'react';
import { useInput } from '../customs/useInput';

const Input = () => {
    const [name, onInputName, setName] = useInput('');
    const [email, onInputEmail, setEmail] = useInput('');
    const [list, setList] = useState([]);

    const insert = () => {
        const newList = list.concat({ name, email });
        setList(newList);
        setName('');
        setEmail('');
    };

    return (
        <div>
            <input value={name} onChange={onInputName} />
            <input value={email} onChange={onInputEmail} />
            <button onClick={insert}>입력</button>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <ul>
                {list.map((item, i) => (
                    <li key={`item${i}`}>
                        <span>{item.name}</span>
                        <span>{item.email}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Input;
