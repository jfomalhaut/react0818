import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/main">Main</Link></li>
			<li><Link to="/list/jisu">List</Link></li>
			<li><Link to="/board">board</Link></li>
		</ul>
	);
};

export default Navigation;