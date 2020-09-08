import React, { useEffect, useState } from 'react';
import axios from 'axios';
const REQ_URL = 'http://www.juso.go.kr/addrlink/addrLinkApi.do';
const CONFIRM_KEY = process.env.CONFIRM_KEY;

const List = () => {
    const perPage = 10;
    const [keyword, setKeyword] = useState('');
    const [keyword2, setKeyword2] = useState('');
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);

    const jusoApi = () => {
        axios.get(`${REQ_URL}?confmKey=${CONFIRM_KEY}&currentPage=${page}&countPerPage=${perPage}&resultType=json&keyword=${keyword2}`
        ).then(
            res => {
                const { data: { results: { juso, common: { totalCount } } } } = res;
                if (juso) {
                    setList(juso);
                    setTotal(totalCount);
                } else {
                    setTotal(totalCount);
                    setList([]);
                }
            }
        )
    }

    const onInput = (e) => {
        const { target: { value } } = e;
        setKeyword(value);
    }

    const onButton = () => {
        setKeyword2(keyword);
    }

    const next = () => {
        setPage(page + 1);
    }

    const prev = () => {
        setPage(page - 1);
    }

    useEffect(() => {
        jusoApi();
    }, [keyword2, page])

    return (
        <>
            <input value={keyword} onChange={onInput}></input>
            <button onClick={onButton}>검색</button>
            {
                total > 0
                    ? <h1>'{keyword2}'에 대한 검색결과 ({total})건</h1>
                    : <h1>검색결과가 없습니다.</h1>
            }
            {
                page > 1
                    ? (<button onClick={prev}>prev</button>)
                    : null
            }
            {
                page >= Math.ceil(total / perPage)
                    ? null
                    : (<button onClick={next}>next</button>)
            }
            <ul>
                {list.map((li, index) =>
                    <li key={`juso${index}`} >
                        <p>{li.jibunAddr}</p>
                        <p>{li.roadAddr}</p>
                    </li>
                )}
            </ul>
        </>
    )
}

export default List;
