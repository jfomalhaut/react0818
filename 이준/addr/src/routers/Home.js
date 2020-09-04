import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const ConfmKey = process.env.CONFIRM_KEY;
const Request_URL = 'http://www.juso.go.kr/addrlink/addrLinkApi.do';

const keywordStyle = { color: 'blue' };

const Home = () => {
	const [list, setList] = useState([]);
	const [keyword, setKeyword] = useState('');
	const [keyword2, setKeyword2] = useState('');
	const [total, setTotal] = useState(0);

	const search = () => {
		Axios.get(`${Request_URL}?confmKey=${ConfmKey}&currentPage=1&countPerPage=10&resultType=json&keyword=${keyword2}`).then(res => {
			const { data: { results: { juso, common: { totalCount } } } } = res;
			setTotal(totalCount);
			setList(juso);
			console.log(juso);
		});
	};

	const onChageKeyword = ev => {
		const { target: { value } } = ev;
		setKeyword(value);
	};

	useEffect(() => {
		search();
	}, [keyword2]);
	
	return (
		<div className="container">
			<input value={keyword} onChange={onChageKeyword} />
			<button onClick={() => setKeyword2(keyword)}>검색</button>
			{keyword2 === '' ? (
				<h1>검색어를 입력해주세요!</h1>
			) : (
				<h1><span style={keywordStyle}>'{keyword2}'</span>에 대한 검색결과({total}개)</h1>
			)}
			{/* roadAddrPart1
			jibunAddr */}
		</div>
	);
};

export default Home;