import React, { useState, useEffect } from 'react';

const value = 3;

function Home() {
	const [data, setData] = useState(15);
	const [name, setName] = useState('이준');

	const increase = () => {
		setData(data + 1);
	};

	const decrease = () => {
		setData(data - 1);
	};

	const changeName = value => {
		setName(value);
	};

	useEffect(() => {
		if (data % value === 0) {
			console.log(`${value}의 배수입니다`);
		}
	}, [data]);

	// class형 component에서는 componentDidMount
	useEffect(() => { // init과 동일한 기능을 가진다.
		console.log('Rendering Home Component')
	}, []);

	return(
		<div>
			<h1>Home Component</h1>
			<h3>{name}</h3>
			<h3>{data}</h3>
			<button onClick={increase}>증가</button>
			<button onClick={decrease}>감소</button>
			<button onClick={() => changeName('이준')}>이름변경 이준</button>
			<button onClick={() => changeName('지수')}>이름변경 지수</button>
		</div>
	);
};

export default Home;