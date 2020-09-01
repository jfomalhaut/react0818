import React from 'react'
import { Link } from 'react-router-dom'

const BusinessNavigation = () => {
    return (
        <ul>
            <li><Link to='/business/vision'>vision</Link></li>
            <li><Link to='/business/cooperation'>cooperation</Link></li>
        </ul>
    )
}

export default BusinessNavigation
