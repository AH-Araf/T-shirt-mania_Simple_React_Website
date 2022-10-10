import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link> <br/>
            <Link to='/orders'>Order</Link>
        </nav>
    );
};

export default Header;