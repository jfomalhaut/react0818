import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const ConfmKey = process.env.CONFIRM_KEY;
const Request_URL = 'http://www.juso.go.kr/addrlink/addrLinkApi.do';
const VIEW = 10;

const keywordStyle = { color: 'blue' };

const Home = () => {
	const [list, setList] = useState([]);
	const [keyword, setKeyword] = useState('');
	const [keyword2, setKeyword2] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [total, setTotal] = useState(0);

	const search = () => {
		Axios.get(`${Request_URL}?confmKey=${ConfmKey}&currentPage=${currentPage}&countPerPage=${VIEW}&resultType=json&keyword=${keyword2}`).then(res => {
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

	const prev = () => {
		setCurrentPage(pv => pv - 1);
	};

	const next = () => {
		setCurrentPage(pv => pv + 1);
	};

	useEffect(() => {
		if (keyword2 !== '') {
			search();
		}
	}, [keyword2, currentPage]);
	
	return (
		<div className="container">
			<input value={keyword} onChange={onChageKeyword} />
			<button onClick={() => setKeyword2(keyword)}>검색</button>
			{keyword2 === '' ? (
				<h1>검색어를 입력해주세요!</h1>
			) : (
				<h1><span style={keywordStyle}>'{keyword2}'</span>에 대한 검색결과({total}개)</h1>
			)}
			<div className="list">
				{list.map(item => (
					<div>
						<div>[도로명]{item.roadAddrPart1}</div>
						<div>[지번]{item.jibunAddr}</div>
					</div>
				))}
			</div>
			{currentPage !== 1 ? (
				<button onClick={prev}>이전</button>
			) : null}
			{/* {(currentPage * VIEW) < total ? ( */}
			{currentPage < (total / VIEW)? (
				<button onClick={next}>다음</button>
			) : null}
		</div>
	);
};


export default Home;