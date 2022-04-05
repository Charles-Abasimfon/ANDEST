import React from 'react';
import { Link, useLocation } from 'react-router-dom';
 
const MenuItems = (props) => {
    const { parentMenu } = props;

    const location = useLocation();

    return (
        <React.Fragment>
            <li className={parentMenu === 'home' ? 'menu-item-has-children active' : 'menu-item-has-children'}><Link to="/">Home</Link>
                <ul className="sub-menu"> 
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <Link to="/">Home Variation 1</Link>
                    </li>
                    <li className={location.pathname === "/home-2" ? "active" : ""}>
                        <Link to="/home-2">Home Variation 2</Link>
                    </li>
                    <li className={location.pathname === "/home-3" ? "active" : ""}>
                        <Link to="/home-3">Home Variation 3</Link>
                    </li>
                </ul>
            </li>
            <li className={location.pathname === '/about' ? 'active' : ''}>
                <Link to="/about">About</Link>
            </li>
            <li className={parentMenu === 'page' ? 'menu-item-has-children active' : 'menu-item-has-children'}>
                <Link to="#">Pages</Link>
                <ul className="sub-menu">
                    <li className={location.pathname === "/blog" ? "active" : ""}>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className={location.pathname === "/blog/blog-details" ? "active" : ""}>
                        <Link to="/blog/blog-details">Blog Details</Link>
                    </li>
                    <li className={location.pathname === "/case-study" ? "active" : ""}>
                        <Link to="/case-study">Case Study</Link>
                    </li>
                    <li className={location.pathname === "/case-study/case-study-details" ? "active" : ""}>
                        <Link to="/case-study/case-study-details">Case Study Details</Link>
                    </li>
                    <li className={location.pathname === "/service" ? "active" : ""}>
                        <Link to="/service">Services</Link>
                    </li>
                    <li className={location.pathname === '/contact' ? 'active' : ''}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </li>
            <li className={location.pathname === '/blog' ? 'active' : ''}>
                <Link to="/blog">Blog</Link>
            </li>
            <li className={location.pathname === '/contact' ? 'active' : ''}>
                <Link to="/contact">Contact</Link>
            </li>
            <li><a href="tel:+00 123 6789"><i class="icofont-iphone"></i> +00 123 6789</a></li>
            <li><Link to="/contact">Get Started</Link></li>
        </React.Fragment>
    );
}

export default MenuItems;