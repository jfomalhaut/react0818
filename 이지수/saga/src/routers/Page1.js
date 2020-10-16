import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = (props) => {
    return (
        <>
            <h1>Page1 로그인 되었습.</h1>
            <Link to='/login'>login</Link>
        </>
    )
};

export default Page1;
