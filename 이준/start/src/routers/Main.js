import React from 'react';

const Main = ({ history }) => {
	const goList = () => {
		history.push('/list/leejun');
	};
	
	return (
		<div>
			<h1> Hello, I'm Main Page </h1>
			<button onClick={goList}>go List</button>
		</div>
	);
};

export default Main;