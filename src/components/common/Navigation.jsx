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
            <svg className="icon-stroke-fill" xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none">
<path d="M1.83267 21.9961C3.16434 23.6007 5.6428 23.6007 10.5997 23.6007H11.4002C16.3572 23.6007 18.8357 23.6007 20.1674 21.9961M1.83267 21.9961C0.501012 20.3916 0.957762 17.9556 1.87126 13.0836C2.5209 9.61886 2.84572 7.88649 4.07889 6.86304M20.1674 21.9961C21.499 20.3916 21.0422 17.9556 20.1287 13.0836C19.4791 9.61886 19.1543 7.88649 17.9211 6.86304M17.9211 6.86304C16.688 5.8396 14.9254 5.8396 11.4002 5.8396H10.5997C7.07461 5.8396 5.31207 5.8396 4.07889 6.86304" stroke="#333333" stroke-width="2"/>
<path d="M7.66943 5.83957V4.7295C7.66943 2.89028 9.16037 1.39929 10.9996 1.39929C12.8389 1.39929 14.3299 2.89028 14.3299 4.7295V5.83957" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
</svg>
                <svg className="icon-stroke-fill" xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 3.81986C9.00067 1.45606 5.65975 0.725544 3.1547 2.89007C0.649644 5.0546 0.296966 8.67355 2.2642 11.2336C3.89982 13.362 8.84978 17.8511 10.4721 19.3041C10.6536 19.4667 10.7443 19.5479 10.8502 19.5798C10.9426 19.6077 11.0437 19.6077 11.1361 19.5798C11.242 19.5479 11.3327 19.4667 11.5142 19.3041C13.1366 17.8511 18.0865 13.362 19.7221 11.2336C21.6894 8.67355 21.3797 5.03183 18.8316 2.89007C16.2835 0.748313 12.9993 1.45606 11 3.81986Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <img 
                    className="burger-menu" 
                    src={menuIcon} 
                    alt="Menu" 
                    onClick={toggleMenu} // Toggle menu on click
                />
            </div>
           
            <img src={logo} alt="Logo" width="200px"/>
           
            <div className="nav-right nav-icon-wrap desktop">
            <svg className="icon-stroke-fill" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 22 23" fill="none">
<path d="M11.0001 11.9476C14.014 11.9476 16.4573 9.50436 16.4573 6.49047C16.4573 3.47657 14.014 1.03333 11.0001 1.03333C7.98621 1.03333 5.54297 3.47657 5.54297 6.49047C5.54297 9.50436 7.98621 11.9476 11.0001 11.9476Z" stroke="#333333" stroke-width="2" stroke-miterlimit="10"/>
<path d="M1 21.9476L1.35238 19.9952C1.76866 17.7405 2.96165 15.7027 4.7241 14.236C6.48655 12.7694 8.7071 11.9664 11 11.9667C13.2956 11.9672 15.5183 12.7729 17.2812 14.2434C19.044 15.7138 20.2353 17.756 20.6476 20.0143L21 21.9667" stroke="#333333" stroke-width="2" stroke-miterlimit="10"/>
</svg>


<svg className="icon-stroke-fill" xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
<path d="M15.2172 15.7346L21 21.5M17.6667 9.83333C17.6667 14.4357 13.9357 18.1667 9.33333 18.1667C4.73096 18.1667 1 14.4357 1 9.83333C1 5.23096 4.73096 1.5 9.33333 1.5C13.9357 1.5 17.6667 5.23096 17.6667 9.83333Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
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
