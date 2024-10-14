import React from "react";
import logo from '../../assets/logo.svg';
import cartIcon from '../../assets/cartIcon.svg';
import accountIcon from '../../assets/accountIcon.svg';
import searchIcon from '../../assets/searchIcon.svg';
import wishIcon from '../../assets/wishIcon.svg';

function Navigation() {
    return(
        <>
        <nav>
            <div className="nav-icon-wrap">
                <img src={cartIcon} alt="" />
                <img src={wishIcon} alt="" />

            </div>
            <div className="logo">
            <img src={logo} alt="" width="100px"/>

            </div>
            <div className="nav-icon-wrap">
            <img src={accountIcon} alt="" />
                <img src={searchIcon} alt="" />
            </div>
        </nav>
        </>
    )
}

export default Navigation;