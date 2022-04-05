import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import commenterImage from '../../assets/images/blog/commenter-image.jpg'

const Commenting = () => {
    return (
        <>
            <Fade bottom>
                <h3 className="ras-comment-heading mt-60">03 Comments</h3>
            </Fade>
            
            <Fade bottom cascade>
                <ul className="ras-comment-list">
                
                    <li>
                        <article className="ras-comment-single">
                            <div className="comment-img">
                                <img src={commenterImage} alt="Avatar" />
                            </div>
                            <div className="ras-comment-body">
                                <h3 className="ras-comment-title">Mickel Philip
                                    <Link to="#" className="comment-reply">Reply <i className="icofont-long-arrow-right"></i></Link>
                                </h3>
                                <p className="comment-date">02 May, 2021</p>
                                <p className="comment-desc">Wisi quam facilisi in aenean ad ipsum dolor sit amet, consectetur adipisic ineeiu smodtempor magna aliqua.</p>
                            </div>
                        </article>
                        <ul className="children">
                            <li>
                                <article className="ras-comment-single">
                                    <div className="comment-img">
                                        <img src={commenterImage} alt="Avatar" />
                                    </div>
                                    <div className="ras-comment-body">
                                        <h3 className="ras-comment-title">Mickel Philip
                                            <Link to="#" className="comment-reply">Reply <i className="icofont-long-arrow-right"></i></Link>
                                        </h3>
                                        <p className="comment-date">02 May, 2021</p>
                                        <p className="comment-desc">Turpis saepe dolor sit amet, is the etiam ctus, possimus, aper conse ctetur adipisic ineei usm odempor magna aliqua.</p>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <article className="ras-comment-single fadeInUp">
                            <div className="comment-img">
                                <img src={commenterImage} alt="Avatar" />
                            </div>
                            <div className="ras-comment-body">
                                <h3 className="ras-comment-title">Mickel Philip
                                    <Link to="#" className="comment-reply">Reply<i className="icofont-long-arrow-right"></i></Link>
                                </h3>
                                <p className="comment-date">02 May, 2021</p>
                                <p className="comment-desc">Sociis nemo ferm entum iure ultricies ornare vulputate ipsum dolor sit amet, consectetur adipisici neeius modte mpor magna aliqua.</p>
                            </div>
                        </article>
                    </li>
                </ul>
            </Fade>
            <div className="ras-post-comment-form">
                <Fade bottom>
                    <h3>Submite Your Comments</h3>
                </Fade>
                <form>
                    <div className="form-group row">
                        <Fade left>
                            <div className="form-group col-lg-6 col-md-6 name mb-10">
                                <label for="name" className="sr-only">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Name *" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Name *'" />
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="form-group col-lg-6 col-md-6 email mb-10">
                                <label for="email" className="sr-only">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Email *"  onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email *'" />
                            </div>
                        </Fade>
                    </div>
                    <Fade bottom>
                        <div className="form-group mb-40">
                            <label for="message" className="sr-only">Message</label>
                            <textarea className="form-control" rows="7" id="message" name="message" placeholder="Comment" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Comment'" required=""></textarea>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <Link to="/" className="btn btn-primary btn-large">Submit Comment <i className="icofont-long-arrow-right"></i></Link>
                    </Fade>
                </form>
            </div>
        </>
    )
}

export default Commenting;