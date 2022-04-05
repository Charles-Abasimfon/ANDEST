import React from 'react';
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import SinglePostTwo from '../../components/Blog/SinglePostTwo';

import blogImg1 from '../../assets/images/blog/blog-1.jpg';
import blogImg2 from '../../assets/images/blog/blog-2.jpg';
import blogImg3 from '../../assets/images/blog/blog-3.jpg';
import blogImg4 from '../../assets/images/blog/blog-4.jpg';
import blogImg5 from '../../assets/images/blog/blog-5.jpg';

const Blog = () => {

    const testimonialSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
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
           <div className="ras-blog ras-blog-2 ras-blog-2-spacer">
                <div className="ras-blog-2-slider">
                    <div className="container">
                        <Fade bottom>
                            <h2 className="text-center mb-50">See our latest & popular tips & tricks<br /> <span className="color-title">from our Experts</span></h2>
                        </Fade>
                        <div className="ras-blog-2-slider">
                            <Slider {...testimonialSettings}>
                                <SinglePostTwo
                                    blogImage = {blogImg1}
                                    blogTitle = 'University while the lovely valley team work '
                                    blogAuthor = 'Philip Hobs'
                                    blogPublishedDate = 'June 15 2020'
                                />
                                <SinglePostTwo 
                                    blogImage = {blogImg2}
                                    blogTitle = 'While The Lovely Valley Team Work'
                                    blogAuthor = 'Philip Hobs'
                                    blogPublishedDate = 'Dec 22 2020'
                                />
                                <SinglePostTwo 
                                    blogImage = {blogImg3}
                                    blogTitle = 'Modern School The Lovely Valley Team Work'
                                    blogAuthor = 'Philip Hobs'
                                    blogPublishedDate = 'Aug 28 2020'
                                />
                                <SinglePostTwo 
                                    blogImage = {blogImg4}
                                    blogTitle = 'While The Lovely Valley Team Work'
                                    blogAuthor = 'Philip Hobs'
                                    blogPublishedDate = 'Dec 22 2020'
                                />
                                <SinglePostTwo 
                                    blogImage = {blogImg5}
                                    blogTitle = 'Modern School The Lovely Valley Team Work'
                                    blogAuthor = 'Philip Hobs'
                                    blogPublishedDate = 'Aug 28 2020'
                                />
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Blog;