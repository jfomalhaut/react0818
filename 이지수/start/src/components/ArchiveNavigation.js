import React from 'react'
import { Link } from 'react-router-dom'

const ArchiveNavigation = () => {
    return (
        <ul>
            <li><Link to='/archive/profit'>profit</Link></li>
            <li><Link to='/archive/review'>review</Link></li>
        </ul>
    )
}
export default ArchiveNavigation
