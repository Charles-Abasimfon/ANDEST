import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

// Team Members
import teamImg1 from '../../assets/images/team/team-2-image-1.jpg';
import teamImg2 from '../../assets/images/team/team-2-image-2.jpg';
import teamImg3 from '../../assets/images/team/team-2-image-3.jpg';
import teamImg4 from '../../assets/images/team/team-2-image-4.jpg';
import teamImg5 from '../../assets/images/team/team-2-image-5.jpg';

const Team = () => {

    return (
        <>
            <div className="ras-team ras-team-2">
                <div className="container">
                    <Fade bottom>
                        <h2 className="text-center mb-40">Recently done <span class="color-title">case study</span> by our <br />inteligents team</h2>
                    </Fade>
                    <div className="row">
                        <Fade bottom cascade>
                            <div className="team-items">
                                <div className="team-single-item">
                                    <Link to="/case-study/case-study-details"><img src={teamImg1}alt="team-image" /></Link>
                                </div>
                                <div className="team-single-item">
                                    <Link to="/case-study/case-study-details"><img src={teamImg2} alt="team-image" /></Link>
                                </div>
                                <div className="team-single-item">
                                    <Link to="/case-study/case-study-details"><img src={teamImg3} alt="team-image" /></Link>
                                </div>
                                <div className="team-single-item">
                                    <Link to="/case-study/case-study-details"><img src={teamImg4} alt="team-image" /></Link>
                                </div>
                                <div className="team-single-item">
                                    <Link to="/case-study/case-study-details"><img src={teamImg5} alt="team-image" /></Link>
                                </div>
                                <div className="team-single-item">
                                    <Link to="/case-study/case-study-details"><img src={teamImg2} alt="team-image" /></Link>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="text-center">
                                <Link to="/case-study" className="ras-explore-more">Explore more</Link>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;