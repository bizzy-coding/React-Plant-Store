import React from "react";
import logo from '../../assets/logo.svg';

function Navigation() {
    return(
        <>
        <nav>
            <div className="nav-icon-wrap"></div>
            <div className="logo">
            <img src={logo} alt="" width="100px"/>

            </div>
            <div className="nav-icon-wrap"></div>
        </nav>
        </>
    )
}

export default Navigation;