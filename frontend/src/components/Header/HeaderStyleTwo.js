import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import normalLogo from '../../assets/images/logos/logowhite.webp';
import stickyLogo from '../../assets/images/logos/logocolored.webp';

const HeaderStyleTwo = (props) => {
  const {
    headerClass,
    parentMenu,
    headerNormalLogo,
    headerStickyLogo,
    mobileNormalLogo,
  } = props;

  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [home, setHome] = useState(false);
  const [pages, setPages] = useState(false);

  const openMobileMenu = (menu) => {
    if (menu === 'home') {
      setHome(!home);
      setPages(false);
    } else if (menu === 'pages') {
      setHome(false);
      setPages(!pages);
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

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <React.Fragment>
      <div className={headerClass ? headerClass : 'ras-header ras-header-1'}>
        <div
          className={
            isVisible ? 'menu-bar menu-sticky sticky' : 'menu-bar menu-sticky'
          }
        >
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-2'>
                <div className='logo'>
                  {isVisible ? (
                    <Link to='/'>
                      <img
                        src={headerStickyLogo ? headerStickyLogo : stickyLogo}
                        alt=''
                      />
                    </Link>
                  ) : (
                    <Link to='/'>
                      <img
                        src={headerNormalLogo ? headerNormalLogo : normalLogo}
                        alt=''
                      />
                    </Link>
                  )}
                </div>
              </div>
              <div className='col-lg-10 relative'>
                <nav className='ras-main-menu'>
                  <ul className={menuOpen ? 'nav-menu menu-open' : 'nav-menu'}>
                    <li
                      className={
                        location.pathname === '/' || location.pathname === '/'
                          ? 'active'
                          : ''
                      }
                    >
                      <Link to='/'>Home</Link>
                    </li>
                    <li
                      className={
                        location.pathname === '/applications' ? 'active' : ''
                      }
                    >
                      <Link to='/blocked'>Applications</Link>
                    </li>
                    <li
                      className={
                        parentMenu === 'page'
                          ? 'menu-item-has-children active'
                          : 'menu-item-has-children'
                      }
                      onClick={() => {
                        openMobileMenu('pages');
                      }}
                    >
                      <Link to='#'>Company</Link>
                      <ul
                        className={
                          pages ? 'sub-menu sub-menu-open' : 'sub-menu'
                        }
                      >
                        <li
                          className={
                            location.pathname === '/about' ? 'active' : ''
                          }
                        >
                          <Link to='/about'>About us</Link>
                        </li>
                        <li
                          className={
                            location.pathname === '/applications'
                              ? 'active'
                              : ''
                          }
                        >
                          <Link to='/blocked'>
                            Skilled Nursing and Long-term Care Services
                          </Link>
                        </li>
                        <li
                          className={
                            location.pathname === '/healthcare-facilities'
                              ? 'active'
                              : ''
                          }
                        >
                          <Link to='/blocked'>Healthcare Facilities</Link>
                        </li>
                        {/*       <li
                          className={
                            location.pathname === '/case-study' ? 'active' : ''
                          }
                        >
                          <Link to='/case-study'>Case Study</Link>
                        </li>
                        <li
                          className={
                            location.pathname ===
                            '/case-study/case-study-details'
                              ? 'active'
                              : ''
                          }
                        >
                          <Link to='/case-study/case-study-details'>
                            Case Study Details
                          </Link>
                        </li> */}
                      </ul>
                    </li>
                    <li
                      className={location.pathname === '/snsa' ? 'active' : ''}
                    >
                      <Link to='/blocked'>SNSA</Link>
                    </li>
                    <li
                      className={location.pathname === '/blog' ? 'active' : ''}
                    >
                      <Link to='/blocked'>Blogs/Vlogs</Link>
                    </li>
                    <li
                      className={
                        location.pathname === '/contact' ? 'active' : ''
                      }
                    >
                      <Link to='/blocked'>Contact us</Link>
                    </li>
                    <li
                      className={
                        location.pathname === '/portal' ? 'active' : ''
                      }
                    >
                      <Link to='/blocked'>Employee Portal</Link>
                    </li>
                  </ul>
                  <button
                    className={
                      menuOpen ? 'mobile-menu-icon open' : 'mobile-menu-icon'
                    }
                    aria-label='Main Menu Icon'
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                    }}
                  >
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
};

export default HeaderStyleTwo;
