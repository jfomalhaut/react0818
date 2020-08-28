import React from 'react'

const Archive = ({ history: { push } }) => {

    const changePage = (path) => {
        push(path)
    }
    return (
        <div>
            <h1>사업 실적</h1>
        </div>
    )
}

export default Archive
