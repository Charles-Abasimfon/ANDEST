import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import normalLogo from '../../assets/images/logos/logo.svg';
import stickyLogo from '../../assets/images/logos/logo-colored.svg';

const HeaderStyleThree = (props) => {
	const { headerClass, parentMenu, headerNormalLogo, headerStickyLogo, mobileNormalLogo } = props;

	const [menuOpen, setMenuOpen] = useState(false)
	const [isVisible, setIsVisible] = useState(false);	

	const [home, setHome] = useState(false)
	const [pages, setPages] = useState(false)

	const openMobileMenu = menu => {

		if (menu === 'home') {
			setHome(!home)
			setPages(false)
		}
		else if (menu === 'pages') {
			setHome(false)
			setPages(!pages)
		}
	};

    const location = useLocation();

	useEffect(() => {
		// Sticky is displayed after scrolling for 100 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<React.Fragment>
			<div className={headerClass ? headerClass : 'ras-header ras-header-2'}>
				<div className={isVisible ? 'menu-bar menu-sticky sticky' : 'menu-bar menu-sticky'}>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-2">
								<div className="logo">
									{
										isVisible ? 
										<Link to="/">
											<img src={headerStickyLogo ? headerStickyLogo : stickyLogo} alt="" />
										</Link> :
										<Link to="/">
											<img src={headerNormalLogo ? headerNormalLogo : normalLogo} alt="" />
										</Link>
									}
								</div>
							</div>
							<div className="col-lg-10 relative">
								<nav className="ras-main-menu">
									<ul className={menuOpen ? "nav-menu menu-open" : "nav-menu"}>
										<li className={parentMenu === 'home' ? 'menu-item-has-children active' : 'menu-item-has-children'} onClick={() => { openMobileMenu('home'); }}><Link to="/">Home</Link>
											<ul className={home ? "sub-menu sub-menu-open" : "sub-menu"}> 
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
                                        <li className={location.pathname === '/service' ? 'active' : ''}>
                                            <Link to="/service">Services</Link>
                                        </li>
										<li className={parentMenu === 'page' ? 'menu-item-has-children active' : 'menu-item-has-children'} onClick={() => { openMobileMenu('pages'); }}>
											<Link to="#">Pages</Link>
											<ul className={pages ? "sub-menu sub-menu-open" : "sub-menu"}>
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
										<li><a href="tel:00123789"><i class="icofont-iphone"></i> +00 123 6789</a></li>
									</ul>
									<button class={menuOpen ? "mobile-menu-icon open" : "mobile-menu-icon"} aria-label="Main Menu Icon" onClick={() => {setMenuOpen(!menuOpen)}}>
										<span></span>
										<span></span>
										<span></span>
									</button>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default HeaderStyleThree;