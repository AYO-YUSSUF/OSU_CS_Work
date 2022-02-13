import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <nav>
            <Link to="/">Home Page</Link>
            <Link to="/order">Order Page</Link>
            <Link to="/stores">Stores List</Link>
        </nav>
    );

}

export default Navigation;