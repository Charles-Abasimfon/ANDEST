
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logos/logo-colored.svg';
import insImg1 from '../../assets/images/instagram/insta-1.jpg';
import insImg2 from '../../assets/images/instagram/insta-2.jpg';
import insImg3 from '../../assets/images/instagram/insta-3.jpg';
import insImg4 from '../../assets/images/instagram/insta-4.jpg';

const FooterTwo = (props) => {
    const { footerLogo, footerClass } = props;
    return (
        <footer className={footerClass ? footerClass : 'ras-footer ras-footer-2'}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 relative">
                        <div className="ras-calltoaction fadeInUp">
                            <h2>Subscribes newsletter to get weekly <br />& monthly News</h2>
                            <Link to="#" className="btn btn-primary btn-large">Subscribes</Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-12 ras-widget-about fadeInLeft relative">
                        <div className="ras-about-logo">
                            <Link to="/"><img src={Logo} alt="Footer Logo" /></Link>
                        </div>

                        <p className="ras-about-desc">Maboriosam in a nesciung eget magnaei<br /> montant odiy.</p>

                        <ul className="ras-social-profile">
                            <li><Link to="#"><i className="icofont-facebook"></i></Link></li>
                            <li><Link to="#"><i className="icofont-twitter"></i></Link></li>
                            <li><Link to="#"><i className="icofont-youtube"></i></Link></li>
                            <li><Link to="#"><i className="icofont-dribbble"></i></Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-8 col-12 relative">
                        <div className="row">
                            <div className="col-lg-4 col-12 ras-widget-links fadeInLeft">
                                <h3 className="ras-widget-title">Quick Links</h3>
                                <ul>
                                    <li><Link to="/contact">Tips & Tricks</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/contact">Privacy Policy</Link></li>
                                    <li><Link to="/contact">Trams & Conditions</Link></li>
                                    <li><Link to="/contact">Portfolio</Link></li>
                
                                </ul>
                            </div>
                
                            <div className="col-lg-4 col-6 ras-widget-instagram fadeInLeft">
                                <h3 className="ras-widget-title">Instagram</h3>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="ras-footer-insta-photo">
                                            <Link to="/blog/blog-details"><img src={insImg1} alt="Office Day" /></Link>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="ras-footer-insta-photo">
                                            <Link to="/blog/blog-details"><img src={insImg2} alt="Group Work" /></Link>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="ras-footer-insta-photo">
                                            <Link to="/blog/blog-details"><img src={insImg3} alt="Office Party" /></Link>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="ras-footer-insta-photo">
                                            <Link to="/blog-details"><img src={insImg4} alt="Meeting with Client" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                            <div className="col-lg-4 col-12 ras-widget-subscribe fadeInLeft">
                                <h3 className="ras-widget-title">Address</h3>
                                <div className="ras-about-address">
                                    <p>178 Alex Avenue. William Street New York, NY-25435</p>
                                    <p className="mb-0">Contact Info:</p>
                                    <p><a href="tel:+1 998 150 3022">+1 998 150 3022 </a>
                                    <span className="email"><a href="mailto:info@yourmail.com">info@yourmail.com</a></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ras-copyright">
                    <div className="row ras-copyright-wrapper relative fadeInUp">
                        <div className="col-md-6">
                            <p className="copyright-text text-left mb-0">© 2021 All Right Reserved, <Link to="/">Rasin</Link></p>
                        </div>   
                        <div className="col-md-6 text-md-right text-left">
                            <ul className="ras-social-profile fadeInUp">
                                <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                <li><a href="#"><i className="icofont-youtube"></i></a></li>
                                <li><a href="#"><i className="icofont-dribbble"></i></a></li>
                            </ul>
                        </div>    
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterTwo;