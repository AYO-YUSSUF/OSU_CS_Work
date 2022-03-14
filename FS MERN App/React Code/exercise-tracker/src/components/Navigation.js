
import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <nav className="navBar">
            <Link className='navBarLink1' to="/">Home Page</Link>
            <Link className='navBarLink2' to="/add-exercise">Add Exercise</Link>
        </nav>
    );

}

export default Navigation;