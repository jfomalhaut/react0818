import React, { useEffect, useState } from 'react';
import Axios from 'axios';
const ConfmKey = process.env.CONFIRM_KEY;
const Request_URL = 'http://www.juso.go.kr/addrlink/addrLinkApi.do';

const Home = () => {
    const [list, setList] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [keyword2, setKeyword2] = useState('');
    const [total, setTotal] = useState('');
    const [page, setPage] = useState(1);
    const search = () => {
        Axios.get(`${Request_URL}?confmKey=${ConfmKey}&currentPage=${page}&countPerPage=10&resultType=json&keyword=${keyword2}`)
            .then(res => {
                const { data: { results: { juso, common: { totalCount } } } } = res;
                setTotal(totalCount);
                setList(juso);
            });
    };

    const onChangeKeyword = (ev) => {
        const { target: { value } } = ev;
        setKeyword(value);
    }

    const plusPage = () => {
        if (page >= 1) {
            setPage(page + 1);
            return;
        }
    };

    const minusPage = () => {
        if (page > 1) {
            setPage(page - 1);
            return;
        }
    };

    useEffect(() => {
        console.log(list);
        // if (keyword2) {
            search();
        // }
    }, [keyword2]);

    return (
        <div className='container'>
            <input value={keyword} onChange={onChangeKeyword} />
            <button onClick={() => setKeyword2(keyword)}>검색</button>
            <h1>'{keyword2}'에 대한 검색 결과({total})개</h1>
            <button onClick={minusPage}>〈</button>
            <button onClick={plusPage}>〉</button>
            <ul>
                {list.map(li =>
                    <li key={`juso${li.bdMgtSn}`}>
                        <p>{li.roadAddr}</p>
                        <p>{li.jibunAddr}</p>
                    </li>
                )
                }
            </ul>
        </div>
    )
}

export default Home
