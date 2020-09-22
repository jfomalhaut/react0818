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
			<li onClick={() => history.push('/page1')}>Page1</li>
			<li>
				<Link to="/page2">Page2</Link>
			</li>
			<li>
				<Link to="/result">Result</Link>
			</li>
		</ul>
	);
};

export default Header;
