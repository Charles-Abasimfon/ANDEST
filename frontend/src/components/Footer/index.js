import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logos/logo-white.png';

const Footer = (props) => {
  const { footerLogo, footerClass, footerCTA } = props;
  return (
    <footer className={footerClass ? footerClass : 'ras-footer ras-footer-1'}>
      <div className='container'>
        {footerCTA ? (
          <div className='row'>
            <div className='col-lg-12'>
              <div className='ras-calltoaction'>
                <h2>
                  We would love to hear from you. <br /> <b>Get in touch</b>
                </h2>
                <Link to='/contact' className='btn btn-primary btn-large'>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}

        <div className='row'>
          <div className='col-lg-4 col-md-12 ras-widget-about'>
            <div className='ras-about-logo'>
              <Link to='/'>
                <img src={footerLogo ? footerLogo : Logo} alt='Footer Logo' />
              </Link>
            </div>

            <p className='ras-about-desc'>ANDEST LLC STAFFING AGENCY</p>

            <div className='ras-about-address'>
              <p className='mb-0'>
                Address: 19043 Fillmore Street Northwest, Elk River, MN 55330,
                United States
              </p>
              <p>
                Phone: <a href='tel:+(612)438-7514'>(612) 438-7514</a>
                <span className='email'>
                  Email: <a href='mailto:admin@andest.org'>admin@andest.org</a>
                </span>
              </p>
            </div>
          </div>
          <div className='col-lg-5 col-md-12 ras-widget-links'>
            <h3 className='ras-widget-title'>Quick Links</h3>
            <ul>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/applications'>Applications</Link>
              </li>
              <li>
                <Link to='/services'>
                  Skilled Nursing and Long-term Care Services
                </Link>
              </li>
              <li>
                <Link to='/healthcare-facilities'>Healthcare Facilities</Link>
              </li>
              <li>
                <Link to='/snsa'>SNSA</Link>
              </li>
              <li>
                <Link to='/blog'>Our Blogs/ Vlogs</Link>
              </li>
              <li>
                <Link to='/contact'>Contact us</Link>
              </li>
            </ul>
          </div>
          <div className='col-lg-3 col-md-12 ras-widget-links'>
            <h3 className='ras-widget-title'>Business Hours</h3>
            <ul>
              <li>
                <span>Mon: 9:00 AM – 5:00 PM</span>
              </li>
              <li>
                <span>Tue: 9:00 AM – 5:00 PM</span>
              </li>
              <li>
                <span>Wed: 9:00 AM – 5:00 PM</span>
              </li>
              <li>
                <span>Thu: 9:00 AM – 5:00 PM</span>
              </li>
              <li>
                <span>Fri: 9:00 AM – 5:00 PM</span>
              </li>
              <li>
                <span>Sat: Closed</span>
              </li>
              <li>
                <span>Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='ras-copyright mt-60'>
          <div className='row ras-copyright-wrapper relative'>
            <div className='col-md-6 text-lg-center'>
              <ul className='ras-social-profile'>
                <li>
                  <Link to='#'>
                    <i className='icofont-facebook'></i>
                  </Link>
                </li>
                <li>
                  <a href='https://instagram.com/andest_llc?utm_medium=copy_link'>
                    <i className='icofont-instagram'></i>
                  </a>
                </li>
                <li>
                  <Link to='#'>
                    <i className='icofont-whatsapp'></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-md-6 text-lg-center'>
              <p className='copyright-text mb-0'>
                © 2022 All Rights Reserved,{' '}
                <Link to='/'>ANDEST LLC STAFFING AGENCY</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
