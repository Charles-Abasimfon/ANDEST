import React  from 'react';
import Fade from 'react-reveal/Fade';

import caseImg from '../../assets/images/case-study/case-study-6.jpg'

const ServiceDetailsMain = () => {

    return (
        <div className="ras-case-study-details sec-spacer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-12">
                        <Fade left>
                            <div className="case-study-image">
                                <img src={caseImg} alt="Web Development" />
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-5 col-12">
                        <Fade right>
                            <div className="ras-project-info">
                                <h3>Service Details</h3>
                                <hr />
                                <div className="project-details">
                                    <p>Date <span className="ml-5"> : 11/10/2021</span></p>
                                    <p>Skills Needed <span className="ml-3"> : Html/CSS/Wordpress</span></p>
                                    <p>Technologies <span className="ml-3"> : Adobe Phtoshop CC </span></p>
                                    <p>Live project <span> : www.clientscom</span></p>
                                    <p>Created by <span> : Philip Hobs </span></p>
                                    <p>Client name <span> : Crist Deo</span></p>
                                    <p>Project type <span> : Development</span></p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="row mt-100">
                    <div className="col-lg-12">
                        <Fade bottom cascade>
                            <div className="case-study-description">
                                <h3 className="case-details-title fadeInUp">Educational Website Design & Development</h3>
                                <p className="mt-5 fadeInUp">Control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised On the other hand, we denounce with righteous indignation and dislike.</p>
                                <p className="fadeInUp">by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided</p>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="row mt-100">
                    <div className="col-lg-6">
                        <Fade left>
                            <div className="project-analysis">
                                <h3 className="case-details-title">Service Analysis</h3>
                                <p className="case-study-des">We Reseach deeply to give the best quality services.</p>
                                <ul className="project-analysis-list case-study-list">
                                    <li>On the other hand, we denounce with righteous indignation ipsum doler seat am</li>
                                    <li>On the other hand, we denounce with righteous indignation ipsum doler seat am</li>
                                    <li>On the other hand, we denounce with righteous indignation ipsum doler seat am</li>
                                    <li>On the other hand, we denounce with righteous indignation ipsum doler seat am</li>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-6">
                        <Fade right>
                            <div className="project-solutions">
                                <h3 className="case-details-title">Find Solution and Solve it</h3>
                                <p className="case-study-des">We Reseach deeply to give the best quality services.</p>
                                <ul className="project-solution-list case-study-list">
                                    <li>On the other hand, we denounce with righteous indignation ipsum doler seat am</li>
                                    <li>On the other hand, we denounce with righteous indignation ipsum doler seat am</li>
                                    <li>On the other hand, we denounce with righteous indignation ipsum doler seat am</li>
                                    <li>On the other hand, we denounce with righteous indignation ipsum doler seat am</li>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="row case-study-result">
                    <div className="col-lg-6 col-12">
                        <Fade left>
                            <div className="project-result-image"></div>
                        </Fade>
                    </div>
                    <div className="col-lg-6 col-12">
                        <Fade right>
                            <div className="project-result">
                                <h3 className="case-details-title">Fainally get the Results</h3>
                                <p className="case-study-des">We Reseach deeply to give the best quality services.</p>
                                <ul className="project-result-list case-study-list">
                                    <li>On the other hand, we denounce with righteous indignation ipsum doler seat am</li>
                                    <li>On the other hand, we denounce with righteous indignation ipsum doler seat am</li>
                                    <li>On the other hand, we denounce with righteous indignation ipsum doler seat am</li>
                                    <li>On the other hand, we denounce with righteous indignation ipsum doler seat am</li>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetailsMain;