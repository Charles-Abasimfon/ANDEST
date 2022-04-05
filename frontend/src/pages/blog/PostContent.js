import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import ModalVideo from 'react-modal-video';

import postImage from '../../assets/images/blog/blog-detail.jpg';
import videoImage from '../../assets/images/video/video-img.jpg';
import authorImage from '../../assets/images/author.jpg';

const PostContent = ({ }) => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <>
            <Fade bottom>
                <div className="ras-post-img">
                    <img src={postImage} alt="Business Analysis for Growing Business" />
                </div>
            </Fade>            
            <ul className="ras-post-meta">
                <Fade bottom>
                    <li className="ras-post-user fadeInLeft">
                        <i className="icofont-user"></i>
                        <Link to="#">James Smith</Link>
                    </li>
                </Fade>
                <Fade bottom>
                    <li className="ras-post-date fadeInLeft">
                        <i className="icofont-ui-clock"></i>
                        <span>21 Feb,2021</span>
                    </li>
                </Fade>
                <Fade bottom>
                    <li className="ras-post-tags fadeInLeft">
                        <i className="icofont-tag"></i>
                        <div className="ras-post-tag-list">
                            <Link to="#">Marketing</Link>,
                            <Link to="#">Finance</Link>,
                            <Link to="#">Business</Link>
                        </div>
                    </li>
                </Fade>
            </ul>
            
            <Fade bottom>
                <h2 className="ras-post-title">Financial Planning & Finance Aduiting</h2>
            </Fade>        
            <div className="ras-post-content">
                <Fade bottom>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisi nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </Fade>
                <Fade bottom>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laborisi esse cillum dolore eu fugiat nulla pariatur.</p>
                </Fade>
                <Fade bottom>
                    <blockquote className="blockquote">
                        <i className="icofont-quote-right"></i>
                        What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between.
                    </blockquote>
                </Fade>
                <Fade bottom>
                    <parent>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisi esse cillum dolore eu fugiat nulla pariatur</parent>
                </Fade>
                <Fade bottom>                    
                    <div className="container">
                    <ModalVideo channel='youtube' isOpen={isOpen} videoId='FMvA5fyZ338' onClose={() => { openModal(); }} />
                        <div className="row align-items-center">
                            <div className="col-lg-12 p-0">
                                <div className="ras-video-container">
                                    <img 
                                        src={videoImage} 
                                        alt="Banner Video" 
                                    />
                                    <div className="ras-overlay-image">
                                        <div className="ras-video-overlay">
                                            <a className="ras-vid-icon ras-video-lightbox vbox-item more" href="#" onClick={() => { openModal(); }}>
                                                <i className="icofont-ui-play"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <h3>How to Prepare?</h3>
                </Fade>
                <Fade bottom>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisi esse cillum dolore eu fugiat nulla pariatur.</p>
                </Fade>
                </div>

            <div className="ras-post-navigation-social">
                <Fade bottom>
                    <div className="ras-post-navigation">
                        <Link to="#" className="btn btn-secondary"><i className="icofont-long-arrow-left"></i> Previous Post</Link>
                        <Link to="#" className="btn btn-primary">Next Post <i className="icofont-long-arrow-right"></i></Link>
                    </div>
                </Fade>
                <Fade right>
                    <ul className="ras-post-social-share">
                        <li><Link to="#"><i className="icofont-facebook"></i></Link></li>
                        <li><Link to="#"><i className="icofont-twitter"></i></Link></li>
                        <li><Link to="#"><i className="icofont-pinterest"></i></Link></li>
                        <li><Link to="#"><i className="icofont-behance"></i></Link></li>
                    </ul>
                </Fade>
            </div>

            <Fade bottom>
                <h3 className="ras-author-title mt-60">Author Details</h3>
            </Fade>
            <div className="ras-post-author">
                <Fade bottom>
                    <div className="author-img">
                        <img src={authorImage} alt="Author Image" />
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="ras-author-info">
                        <h3 className="author-name">Jasica Smith</h3>
                        <h4 className="author-designation">Head of Finance</h4>
                        <p className="author-desc">Lorem ipsum dolor sit amet, consectetur adipisicing eeiusmodtempor mag aliqua. Dolor seat ameat dui to more be consecteture elite.</p>
                        <ul className="author-social-profile">
                            <li><Link to="#"><i className="icofont-facebook"></i></Link></li>
                            <li><Link to="#"><i className="icofont-twitter"></i></Link></li>
                            <li><Link to="#"><i className="icofont-pinterest"></i></Link></li>
                            <li><Link to="#"><i className="icofont-behance"></i></Link></li>
                        </ul>
                    </div>
                </Fade>
            </div>
        </>
    )
}

export default PostContent;