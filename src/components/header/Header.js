import React from 'react';
import './header.css'
import {
    Link
} from "react-router-dom";

const Header = (props) => {
    return (
        <div className="header">
            <div className="title">
                <Link to="/">{props.title}</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>

        </div>
    );

}

export default Header;
