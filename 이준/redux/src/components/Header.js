import React, { useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Header = () => {
	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		const { pathname } = location;
		// console.log(pathname.substring(1));
	}, [location]);
	return (
		<ul>
			{/* <li onClick={() => history.push('/page1')}>Page1</li> */}
			<li>
				<Link to="/list">List</Link>
			</li>
			<li>
				<Link to="/cart">Cart</Link>
			</li>
		</ul>
	);
};

export default Header;
