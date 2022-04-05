import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import diamondShape from '../../assets/images/diamond-shape.svg';
import curlyShape from '../../assets/images/curly-shape.svg';
import bannerDots from '../../assets/images/banner-dots-1.svg';
import triangle from '../../assets/images/triangle.svg';

import Logo from '../../assets/images/logos/logo.svg';

const Footer = (props) => {
  const { footerLogo, footerClass, footerCTA } = props;
  return (
    <footer className={footerClass ? footerClass : 'ras-footer ras-footer-1'}>
      <div className='container'>
        {footerCTA ? (
          <div className='row'>
            <div className='col-lg-12'>
              <Fade bottom>
                <div className='ras-calltoaction'>
                  <h2>
                    If you have any project or task for us <br />{' '}
                    <b> Please contact us</b>
                  </h2>
                  <Link to='/contact' className='btn btn-primary btn-large'>
                    Contact Us!
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
        ) : (
          ''
        )}

        <Fade left cascade>
          <div className='row'>
            <div className='col-lg-5 col-md-12 ras-widget-about'>
              <div className='ras-about-logo'>
                <Link to='/'>
                  <img src={footerLogo ? footerLogo : Logo} alt='Footer Logo' />
                </Link>
              </div>

              <p className='ras-about-desc'>
                This is Photoshop's version of LoreiIpsum.
                <br /> Aenean sollicitudin,{' '}
              </p>

              <div className='ras-about-address'>
                <p className='mb-0'>
                  Address: House 22, Road No : 3, Street address, DHK
                </p>
                <p>
                  Phone: <a href='tel:+000-1234-678'>+000-1234-678</a>
                  <span className='email'>
                    Email:{' '}
                    <a href='mailto:info@yourmail.com'>info@yourmail.com</a>
                  </span>
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-12 ras-widget-links'>
              <h3 className='ras-widget-title'>Quick Links</h3>
              <ul>
                <li>
                  <Link to='/contact'>Tips & Tricks</Link>
                </li>
                <li>
                  <Link to='/about'>About Us</Link>
                </li>
                <li>
                  <Link to='/contact'>Privacy Policy</Link>
                </li>
                <li>
                  <Link to='/contact'>Trams & Conditions</Link>
                </li>
                <li>
                  <Link to='/contact'>Portfolio</Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-4 col-md-12 ras-widget-subscribe'>
              <h3 className='ras-widget-title'>Subscribes</h3>
              <p>
                This is Photoshop's version of LoreiIpsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin,{' '}
              </p>
              <form className='ras-footer-subscribe'>
                <label htmlFor='footer-subscribe' className='sr-only'>
                  Subscribe
                </label>
                <input
                  type='email'
                  placeholder='Enter your email'
                  id='footer-subscribe'
                />
                <button type='submit'>Subscribe</button>
              </form>
            </div>
          </div>
        </Fade>

        <div className='ras-copyright mt-60'>
          <div className='row ras-copyright-wrapper relative'>
            <div className='col-md-6 text-lg-center'>
              <Fade bottom>
                <ul className='ras-social-profile'>
                  <li>
                    <Link to='#'>
                      <i className='icofont-facebook'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <i className='icofont-twitter'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <i className='icofont-youtube'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <i className='icofont-dribbble'></i>
                    </Link>
                  </li>
                </ul>
              </Fade>
            </div>
            <Fade bottom>
              <div className='col-md-6 text-lg-center'>
                <p className='copyright-text mb-0'>
                  © 2021 All Right Reserved, <Link to='/'>Rasin</Link>
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className='ras-footer-shapes'>
        <img src={diamondShape} alt='Diamond Shape' className='diamond-shape' />
        <img src={triangle} alt='Traingle Shape' className='triangle-shape' />
        <img src={curlyShape} alt='Curly shape' className='curly-shape' />
        <img src={bannerDots} alt='Dot Shape' className='square-dots-1' />
      </div>
    </footer>
  );
};

export default Footer;
