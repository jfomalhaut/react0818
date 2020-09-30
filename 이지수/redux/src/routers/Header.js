import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <ul>
            <li>
                <Link to='/page'>Page</Link>
            </li>
            <li>
                <Link to='/result'>Result</Link>
            </li>
            <li>
                <Link to='/list'>List</Link>
            </li>
            <li>
                <Link to='/cart'>Cart</Link>
            </li>
        </ul>
    )
}

export default Header;
