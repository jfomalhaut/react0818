import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <ul>
            <li><Link to='/intro'>회사소개</Link></li>
            <li><Link to='/history'>연혁</Link></li>
            <li><Link to='/ceo'>대표메세지</Link></li>
        </ul>
    )
}

export default Navigation
