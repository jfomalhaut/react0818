import React from 'react'
import { Link } from 'react-router-dom';

const Vision = () => {
    return (
        <div>
            <h1>vision</h1>
            <Link to="/company/info">
                <button>info로</button>
            </Link>
        </div>
    )
}

export default Vision
