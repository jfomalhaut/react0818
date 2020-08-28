import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <ul>
            <li><Link to='/company'>회사 소개</Link></li>
            <li><Link to='/business'>사업 소개</Link></li>
            <li><Link to='/archive'>사업 실적</Link></li>
        </ul>
    )
}

export default Navigation
