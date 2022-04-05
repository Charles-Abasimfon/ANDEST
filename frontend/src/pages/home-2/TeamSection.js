import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import SingleTeam from '../../components/Team/SingleTeam';

// Team Members
import teamimg1 from '../../assets/images/team/team-1.jpg';
import teamimg2 from '../../assets/images/team/team-2.jpg';
import teamimg3 from '../../assets/images/team/team-3.jpg';
import teamimg4 from '../../assets/images/team/team-4.jpg';
import teamimg5 from '../../assets/images/team/team-5.jpg';
import teamimg6 from '../../assets/images/team/team-6.jpg';

const Team = () => {

    function NextArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}><i className="flaticon-right-arrow"></i></button>
        );
    }

    function PrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}> <i className="flaticon-left-arrow"></i></button>
        );
    }

    const slilderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: true,        
        margin: 20,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        className: "active",
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {

                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {

                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="ras-team ras-team-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Fade bottom>
                                <div className="ras-calltoaction">
                                    <h2>If you have any project or task for us<br />Please contact us</h2>
                                    <Link to="/contact" className="btn btn-primary btn-large">Contact Us!</Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="ras-slider-four-col">
                        <Slider {...slilderSettings}>
                            <SingleTeam
                                itemClass="team-item"
                                Image={teamimg1}
                                Title="Makhaia Antitni"
                                Designation="President & CEO"
                            />

                            <SingleTeam
                                teamClass="team-item"
                                Image={teamimg2}
                                Title="Corey Anderson"
                                Designation="CEO & Founder"
                            />

                            <SingleTeam
                                teamClass="team-item"
                                Image={teamimg3}
                                Title="Masud Rana"
                                Designation="Web Developer"
                            />

                            <SingleTeam
                                teamClass="team-item"
                                Image={teamimg4}
                                Title="Najmul Huda"
                                Designation="Digital Marketer"
                            />

                            <SingleTeam
                                teamClass="team-item"
                                Image={teamimg5}
                                Title="Rushali Rumi"
                                Designation="Design Lead"
                            />

                            <SingleTeam
                                teamClass="team-item"
                                Image={teamimg6}
                                Title="Abu Sayed"
                                Designation="App Developer"
                            />
                        </Slider>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Team;