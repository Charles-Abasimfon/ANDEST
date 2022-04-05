import React  from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import caseImg1 from '../../assets/images/case-study/case-study-1.jpg'
import caseImg2 from '../../assets/images/case-study/case-study-2.jpg'
import caseImg3 from '../../assets/images/case-study/case-study-3.jpg'

const CaseStudyMain = () => {

    return (
        <div className="ras-case-study ras-case-study-1 sec-spacer">
            <div className="container">
                <Fade bottom>
                    <h2 className="text-center mb-50">Recently done case study by our<br />inteligents team</h2>
                </Fade>
                <Fade bottom cascade>
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-4">
                            <div className="ras-single-case-study">
                                <div className="case-study-image case-study-orange">
                                    <img src={caseImg1} alt="Online educational website development" />
                                </div>
                                <h4><Link to="/case-study/case-study-details" className="case-study-title">Online educational website development</Link></h4>
                                <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="ras-single-case-study">
                                <div className="case-study-image case-study-sky-blue">
                                    <img src={caseImg2} alt="Educational website development" />
                                </div>
                                <h4><Link to="/case-study/case-study-details" className="case-study-title">Educational website development</Link></h4>
                                <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="ras-single-case-study">
                                <div className="case-study-image case-study-red">
                                    <img src={caseImg3} alt="Business website Development" />
                                </div>
                                <h4><Link to="/case-study/case-study-details" className="case-study-title">Business website Development</Link></h4>
                                <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade bottom cascade>
                    <div className="row align-items-center mt-5">
                        <div className="col-md-12 col-lg-4">
                            <div className="ras-single-case-study">
                                <div className="case-study-image case-study-orange">
                                    <img src={caseImg1} alt="Online educational website development" />
                                </div>
                                <h4><Link to="/case-study/case-study-details" className="case-study-title">Online educational website development</Link></h4>
                                <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="ras-single-case-study">
                                <div className="case-study-image case-study-sky-blue">
                                    <img src={caseImg2} alt="Educational website development" />
                                </div>
                                <h4><Link to="/case-study/case-study-details" className="case-study-title">Educational website development</Link></h4>
                                <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="ras-single-case-study">
                                <div className="case-study-image case-study-red">
                                    <img src={caseImg3} alt="Business website Development" />
                                </div>
                                <h4><Link to="/case-study/case-study-details" className="case-study-title">Business website Development</Link></h4>
                                <Link to="/case-study/case-study-details" className="read-more">Read more</Link>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="ras-pagination mt-60 md-mt-30 text-center">
                        <a className="prev page-numbers" href="#"><i className="icofont-double-left"></i></a>
                        <a className="page-numbers" href="#">1</a>
                        <span className="page-numbers current">2</span>
                        <a className="page-numbers" href="#">3</a>
                        <a className="next page-numbers" href="#"><i className="icofont-double-right"></i></a>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default CaseStudyMain;