import React from 'react';
import './header.css'
import {
    Link
} from "react-router-dom";

const Header = (props) => {
    return (


        <div className="dc-row header">
            <div className="dc-column dc-column--small-6 part-one">
                <div className="dc-column__contents dc-column__contents--center">
                    <Link to="/">{props.title}</Link>
                </div>
            </div>
            <div className="dc-column dc-column--small-6 part-two">
                <div className="dc-column__contents dc-column__contents--center">
                    <Link to="/about">About</Link>
                </div>
            </div>
        </div>
    );

}

export default Header;
