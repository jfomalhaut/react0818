import React, { useState } from 'react';

interface ProductProps {
	name: string;
	price: number;
	dsecription?: string;
	buy: (qty: string) => void;
};

function Product({ buy, name, price, dsecription="설명글이 없습니다" }: ProductProps) {
	const [quantity, setQuantity] = useState<string>('');

	const onChangeValue = (ev: any) => {
		const { target: { value } } = ev;
		setQuantity(value);
	};

	return (
		<div>
			<h1>상품명: {name}</h1>
			<h1>가격: {price}</h1>
			<p>{dsecription}</p>
			<input value={quantity} onChange={onChangeValue} />
			<button onClick={() => buy(quantity)}>buy!</button>
		</div>
	);
};

export default Product;