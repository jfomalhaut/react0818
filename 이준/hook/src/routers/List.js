import React, { useState, useEffect } from 'react';
import Items from '../jsons/fishes.json';
import './List.css';

export const listStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	gridGap: '25px',
	margin: '50px auto',
	width: '1000px'
};

const List = () => {
	const [list, setList] = useState([]);

	const onCheck = id => {
		// 추가 => concat
		// 수정 => map
		// 삭제 => filter, slice
		const newList = list.map(item => {
			if (item.id === id) {
				return ({ ...item, check: !item.check });
			} else {
				return item;
			}
		});

		// const newList2 = list.map(item => ({...item, check: !item.check}));

		setList(newList);
	};

	const onDelete = (id) => {
		const newList = list.filter(item => item.id !== id);
		setList(newList);
	};

	// useEffect(() => {
	// 	console.log('state [list]의 status가 update되었음.')
	// }, [list]);

	useEffect(() => {
		setList(Items);
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

export default List;
