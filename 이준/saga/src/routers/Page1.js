import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = (props) => {
	return (
		<div>
			<h1>Page1 로그인시 접속 가능</h1>
			<Link to="/login">login?</Link>
			<Link to="/page2">page2?</Link>
		</div>
	);
};

export default Page1;
