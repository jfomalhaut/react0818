import React from 'react'

const History = ({ history: { push } }) => {

    const changePage = (path) => {
        push(path)
    }

    return (
        <div>
            <h1>연혁</h1>
            <button onClick={() => changePage('intro')}>회사소개</button>
            <button onClick={() => changePage('history')}>연혁</button>
            <button onClick={() => changePage('ceo')}>대표메시지</button>
        </div>
    )

}

export default History
