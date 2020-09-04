import React, { useEffect, useState } from 'react';
import Items from '../jsons/items.json';

const nf = new Intl.NumberFormat();
const CONFIRM_KEY = process.env.CONFIRM_KEY;

const List = ({ match: { params: { category } } }) => {
	console.log(CONFIRM_KEY);
	const [items, setItems] = useState([]);

	const transType = cate => {
		switch(cate) {
			case 'fish': return 1;
			case 'fruit': return 2;
			case 'vegetable': return 3;
		}
	};

	const comma = (num) => {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	const transLabel = type => {
		switch(type) {
			case 1: return '수산물';
			case 2: return '청과';
			case 3: return '야채';
		}
	};

	useEffect(() => {
		if (category === 'all') {
			setItems(Items);
			return;
		}

		const type = transType(category);
		const temp = Items.filter(item => item.type === type);
		setItems(temp);
	}, [category]);

	return (
		<div className="container">
			<div className="items">
				{items.map(item => (
					<div className="item">
						<div className={`img color${item.type}`} />
						<div className="info">
							<div className="top">
								<span className="type border1">{transLabel(item.type)}</span>
								<span className="name">{item.name}</span>
							</div>
							<div className="price">{nf.format(item.price)}원</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default List;