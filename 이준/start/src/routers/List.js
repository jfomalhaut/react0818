import React from 'react';

const List = ({ history, match: { params : { name } } }) => {
	
	const goMain = () => {
		history.push('/main');
	};

	return (
		<div>
			<h1> Hello, I'm List Page </h1>
			<h1>현재 페이지가 받은 값은 : {name}</h1>
			<button onClick={goMain}>Main으로</button>
		</div>
	);
};

export default List;