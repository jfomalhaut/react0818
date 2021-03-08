import React, { useState } from 'react';
import Axios from 'axios';

const Home = () => {
	const [list, setList] = useState([]);

	const getData = () => {
		Axios.get('http://localhost:4000/api/getData').then(res => {
			const { data: { data } } = res;
			setList(data);
		}).catch(error => {
			console.log('네트워크 연결에 실패');
		});
	};

	const getPostData = () => {
		const payload = {
			id: 3
		};
		Axios.post('http://localhost:4000/api/getPostData', payload).then(res => {
			const { data: { data } } = res;
			console.log(data);
		}).catch(error => {
			console.log('네트워크 연결에 실패');
		});
	};

	return (
		<div>
			<h1>Home Component</h1>
			<button onClick={getData}>데이터 받기</button>
			<button onClick={getPostData}>POST 데이터 받기</button>
			<ul>
				{list.map(item => (
					<li key={`LIST_ITEM${item.id}`}>
						<div>{item.name}</div>
						<div>{item.price}원</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
