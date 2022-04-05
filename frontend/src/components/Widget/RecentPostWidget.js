import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import RecentPost from '../Blog/RecentPost'

// Recent Post Thumb Images
import img1 from '../../assets/images/blog/blog-1.jpg'
import img2 from '../../assets/images/blog/blog-2.jpg'

const RecentPostWidget = () => {

    const blogSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="ras-widget-recent">
            <Fade bottom>
                <h3 className="ras-widget-title mb-40">Recent Posts</h3>
            </Fade>
            <Fade bottom>
                <div className="ras-recent-inner recentSlider">
                    <div className="slide">
                        <Slider {...blogSettings}>
                            <div className="ras-recent-items">
                                <RecentPost 
                                    postImage = {img1}
                                />
                                <RecentPost 
                                    postImage = {img2}
                                />
                                <RecentPost 
                                    postImage = {img1}
                                />
                                <RecentPost 
                                    postImage = {img2}
                                />
                            </div>
                            <div className="ras-recent-items">
                                <RecentPost 
                                    postImage = {img1}
                                />
                                <RecentPost 
                                    postImage = {img2}
                                />
                                <RecentPost 
                                    postImage = {img1}
                                />
                                <RecentPost 
                                    postImage = {img2}
                                />
                            </div>                
                        </Slider>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default RecentPostWidget;