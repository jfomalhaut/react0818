import React, { useState } from 'react';
import { ListItem } from '../components';
import Items from '../jsons/fishes.json';
import { Button, ListStyle } from '../style/style';

const List = () => {
	const [list, setList] = useState(Items);
	
	const handleCart = () => {
		
	};

	const handleCheck = (id) => {
		const newList = list.map(item => item.id === id ? ({ ...item, check: !item.check }) : item);
		setList(newList);
	};

	return (
		<div className="container">
			<Button>전체 선택</Button>
			<Button>전체 선택 해제</Button>
			<Button onClick={handleCart}>선택 상품 장바구니에 담기</Button>
			<ListStyle>
				{list.map((item) => (
					<ListItem handleCheck={handleCheck} item={item} key={`ITEM${item.id}`} />
				))}
			</ListStyle>
		</div>
	);
};

export default List;
