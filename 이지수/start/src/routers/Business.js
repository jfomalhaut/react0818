import React from 'react'

const Business = ({ history: { push } }) => {

    const changePage = (path) => {
        push(path)
    }

    return (
        <div>
            <h1>사업 내용</h1>
        </div>
    )

}

export default Business
