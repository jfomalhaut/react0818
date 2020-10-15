import React from 'react';
import { Button, Checkbox, Item } from '../style/style';
import { Cart } from '../actions';
import { useDispatch } from 'react-redux';

const nf = new Intl.NumberFormat();

const ListItem = ({ handleCheck, item, item: { name, price, check, id, src } }) => {
	const dispatch = useDispatch();

	const onCart = () => {
		dispatch(Cart.addCart(item));
	};

	return (
		<Item className="item">
			<Checkbox className={`checkbox ${check ? 'checked' : ''}`} />
			<img src={src} onClick={() => { handleCheck(id); }} />
			<div>
				<p>{name}</p>
				<p>{nf.format(price)}원</p>
			</div>
			<Button onClick={onCart}>담기</Button>
		</Item>
	);
};

export default ListItem;
