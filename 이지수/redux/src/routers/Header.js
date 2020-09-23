import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <ul>
            <li>
                <Link to='/page1'>Page1</Link>
            </li>
            <li>
                <Link to='/page2'>Page2</Link>
            </li>
            <li>
                <Link to='/result'>Result</Link>
            </li>
        </ul>
    )
}

export default Header;
