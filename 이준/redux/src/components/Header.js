import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Header = () => {
	const location = useLocation();
	const history = useHistory();

	const cart = useSelector(({ cartReducer }) => cartReducer.cart);

	// useEffect(() => {
	// 	const { pathname } = location;
	// }, [location]);

	// useEffect(() => {
	// 	console.log(cart);
	// }, [cart]);

	return (
		<ul>
			{/* <li onClick={() => history.push('/page1')}>Page1</li> */}
			<li>
				<Link to="/list">List</Link>
			</li>
			<li>
				<Link to="/cart">Cart({ cart.length })</Link>
			</li>
		</ul>
	);
};

export default Header;
