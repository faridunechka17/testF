import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Header</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/page1">Main</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/page2">Menu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/page3">User</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;