import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const cart = useSelector(({ cartReducer }) => cartReducer.cart);

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
                <Link to='/cart'>Cart({cart.length})</Link>
            </li>
        </ul>
    )
}

export default Header;
