import React, { useEffect, useState } from 'react';
import ITEMS from '../jsons/fishes.json';
import { listStyle } from './List';

const Reducer = () => {
	const [list, setList] = useState([]);

	const onCheck = (id) => {

	};

	const onDelete = (id) => {

	};

	useEffect(() => {
		setList(ITEMS);
	}, []);

	return (
		<div className="container">
			<button>전체선택</button>
			<button>전체삭제</button>
			<button>선택삭제</button>
			<div className="list" style={listStyle}>
				{list.map((item) => (
					<div className="item">
						<span className={`checkbox ${item.check ? 'checked' : ''}`} onClick={() => onCheck(item.id)}  />
						<img src={item.src} style={{ width: '100%' }} onClick={() => onCheck(item.id)} />
						<div className="info">
							<div className="name">{item.name}</div>
							<div className="name">{item.price}</div>
						</div>
						<button onClick={() => onDelete(item.id)}>삭제</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Reducer;