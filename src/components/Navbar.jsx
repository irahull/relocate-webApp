import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosCart } from "react-icons/io";
import menuBtn from "../assets/menu-btn.svg";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartModal from './CartModal';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const cartItems = useSelector(state => state.cart.items);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const handleCartToggle = () => {
        setIsCartOpen(!isCartOpen);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => setIsDropdownOpen(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <motion.div
                data-animation="over-left"
                className="fixed-nav-bar w-nav"
                data-easing2="ease"
                data-easing="ease"
                data-collapse="medium"
                role="banner"
                data-duration="400"
                data-doc-height="1"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
                <div className="header-container w-container">
                    <NavLink to="/" className="brand w-nav-brand" aria-label="home">
                        <img
                            src="https://cdn.prod.website-files.com/6687b4ef6c504854f62dde21/668fa8b8ab9f3947dbf89683_Relocation%20Logo%20Black.svg"
                            loading="lazy"
                            alt="logo"
                            className="logo-header"
                        />
                    </NavLink>
                    <nav role="navigation" className={`nav-menu w-nav-menu ${isMenuOpen ? 'open' : ''}`} >
                        <div className="tablet-menu">
                            <NavLink to="/" className="brand-tablet w-nav-brand" aria-label="home">
                                <img
                                    loading="lazy"
                                    height="30"
                                    alt="logo"
                                    src="https://cdn.prod.website-files.com/6687b4ef6c504854f62dde21/668fa8b8ab9f3947dbf89683_Relocation%20Logo%20Black.svg"
                                    className="logo-header"
                                />
                            </NavLink>
                            <div
                                className="close-menu-button-2 w-nav-button"
                                aria-label="menu"
                                role="button"
                                tabIndex="0"
                                onClick={toggleMenu}
                            >
                                <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/6641d40cccccc956df1e957b/6641d40cccccc956df1e961c_x_icon.png"
                                    alt=""
                                    className="nav-close-icon-2"
                                />
                            </div>
                        </div>
                        <div className="menu-wrap">
                            <NavLink
                                onClick={toggleMenu}
                                to="/"
                                className={({ isActive }) => `nav-link w-nav-link ${isActive ? 'active' : ''}`}
                            >
                                Home
                            </NavLink>
                            <div className="nav-dropdown w-dropdown">
                                <div
                                    className="nav-dropdown-toggle w-dropdown-toggle"
                                    id="w-dropdown-toggle-1"
                                    aria-controls="w-dropdown-list-1"
                                    aria-haspopup="menu"
                                    role="button"
                                    tabIndex="0"
                                    onClick={toggleDropdown}
                                >
                                    <div className="nav-item-title">About Us</div>
                                    <div className="nav-dropdown-icon w-icon-dropdown-toggle" aria-hidden="true"></div>
                                </div>
                                <nav className={`dropdown-nav-list w-dropdown-list ${isDropdownOpen ? 'open' : ''}`} id="w-dropdown-list-1">
                                    <div className="column">
                                        <NavLink
                                            onClick={closeDropdown}
                                            to="/about-us"
                                            className={({ isActive }) => `dropdown-link w-dropdown-link ${isActive ? 'active' : ''}`}
                                        >
                                            About Us
                                        </NavLink>
                                        <NavLink
                                            onClick={closeDropdown}
                                            to="/our-team"
                                            className={({ isActive }) => `dropdown-link w-dropdown-link ${isActive ? 'active' : ''}`}
                                        >
                                            Our Team
                                        </NavLink>
                                        <NavLink
                                            onClick={closeDropdown}
                                            to="/pricing"
                                            className={({ isActive }) => `dropdown-link w-dropdown-link ${isActive ? 'active' : ''}`}
                                        >
                                            Pricing
                                        </NavLink>
                                        <NavLink
                                            onClick={closeDropdown}
                                            to="/career"
                                            className={({ isActive }) => `dropdown-link w-dropdown-link ${isActive ? 'active' : ''}`}
                                        >
                                            Career
                                        </NavLink>
                                        <NavLink
                                            onClick={closeDropdown}
                                            to="/faq"
                                            className={({ isActive }) => `dropdown-link w-dropdown-link ${isActive ? 'active' : ''}`}
                                        >
                                            FAQ
                                        </NavLink>
                                        <NavLink
                                            onClick={closeDropdown}
                                            to="/testimonials"
                                            className={({ isActive }) => `dropdown-link w-dropdown-link ${isActive ? 'active' : ''}`}
                                        >
                                            Testimonials
                                        </NavLink>
                                    </div>
                                </nav>
                            </div>
                            <NavLink
                                onClick={toggleMenu}
                                to="/services"
                                className={({ isActive }) => `nav-link w-nav-link ${isActive ? 'active' : ''}`}
                            >
                                Services
                            </NavLink>
                            <NavLink
                                onClick={toggleMenu}
                                to="/shop"
                                className={({ isActive }) => `nav-link w-nav-link ${isActive ? 'active' : ''}`}
                            >
                                Shop
                            </NavLink>
                            <NavLink
                                onClick={toggleMenu}
                                to="/blogs"
                                className={({ isActive }) => `nav-link w-nav-link ${isActive ? 'active' : ''}`}
                            >
                                Blogs
                            </NavLink>
                            <div className="tablet-button-wrapper">
                                <NavLink to="/contact-us" className="primary-button tablet-button w-button">
                                    Contact Us
                                </NavLink>
                            </div>
                        </div>
                    </nav>
                    <div className="w-commerce-commercecartwrapper cart">
                        <a onClick={handleCartToggle} className="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open empty cart" data-node-type="commerce-cart-open-link">
                            <IoIosCart className="w-commerce-commercecartopenlinkicon" />
                            <div className="w-commerce-commercecartopenlinkcount cart-quantity">{cartItemCount ? cartItemCount : 0}</div>
                        </a>
                    </div>
                    <div className="header-button-wrapper">
                        <NavLink to="/contact-us" className="primary-button w-button">Contact Us</NavLink>
                    </div>
                    <div
                        onClick={toggleMenu}
                        className="menu-button w-nav-button" aria-label="menu" role="button" tabIndex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
                        <img src={menuBtn} alt="menu button" />
                    </div>
                </div>
            </motion.div>

            {/* Render CartModal when isCartOpen is true */}
            {isCartOpen && <CartModal isOpen={isCartOpen} onClose={handleCartToggle} />}
        </>
    );
};

export default Navbar;
