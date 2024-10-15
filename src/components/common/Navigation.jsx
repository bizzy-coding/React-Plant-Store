import React, { useState } from "react";
import logo from '../../assets/logoRectangle.svg';
import cartIcon from '../../assets/cartIcon.svg';
import accountIcon from '../../assets/accountIcon.svg';
import searchIcon from '../../assets/searchIcon.svg';
import wishIcon from '../../assets/wishIcon.svg';
import menuIcon from '../../assets/menuIcon.svg'; // Add burger menu icon

function Navigation() {
    const [isMenuOpen, setMenuOpen] = useState(false); // Track the menu open state

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen); // Toggle the popup
    };

    return(
        <>
        <nav className="navigation">
            <div className="container">
            <div className="nav-left nav-icon-wrap desktop">
                <img className="icon-cart" src={cartIcon} alt="Cart Icon" />
                <img className="icon-wish" src={wishIcon} alt="Wishlist Icon" />
                <img 
                    className="burger-menu" 
                    src={menuIcon} 
                    alt="Menu" 
                    onClick={toggleMenu} // Toggle menu on click
                />
            </div>
           
            <img src={logo} alt="Logo" width="200px"/>
           
            <div className="nav-right nav-icon-wrap desktop">
                <img className="icon-account" src={accountIcon} alt="Account Icon" />
                <img className="icon-search" src={searchIcon} alt="Search Icon" />
            </div>
            </div>
        </nav>

        {/* Popup Menu */}
        {isMenuOpen && (
            <div className="popup-menu">
                <img className="icon-cart" src={cartIcon} alt="Cart Icon" />
                <img className="icon-wish" src={wishIcon} alt="Wishlist Icon" />
                <img className="icon-account" src={accountIcon} alt="Account Icon" />
                <img className="icon-search" src={searchIcon} alt="Search Icon" />
            </div>
        )}
        </>
    )
}

export default Navigation;
