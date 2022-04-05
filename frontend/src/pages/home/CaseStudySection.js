import React  from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import caseImg1 from '../../assets/images/case-study/case-study-1.jpg'
import caseImg2 from '../../assets/images/case-study/case-study-2.jpg'
import caseImg3 from '../../assets/images/case-study/case-study-3.jpg'

const CaseStudy = () => {

    return (
        <div className="ras-case-study ras-case-study-1">
            <div className="container">
                <Fade bottom>
                    <h2 className="text-center mb-50">Recently done case study by our <br />inteligents team</h2>
                </Fade>
                <Fade left cascade>
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
                <Fade bottom>
                    <div className="explore-more text-center">
                        <Link to="/case-study">Explore more</Link>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default CaseStudy;