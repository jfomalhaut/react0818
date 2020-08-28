import React from 'react'
import { Link } from 'react-router-dom'

const CompanyNavigation = () => {
    return (
        <ul>
            <li><Link to='/company/location'>Location</Link></li>
            <li><Link to='/company/info'>Information</Link></li>
        </ul>
    )
}

export default CompanyNavigation
