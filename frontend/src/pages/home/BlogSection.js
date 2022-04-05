import React from 'react';
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import SinglePost from '../../components/Blog/SinglePost';

import blogImg1 from '../../assets/images/blog/blog-1.jpg';
import blogImg2 from '../../assets/images/blog/blog-2.jpg';
import blogImg3 from '../../assets/images/blog/blog-3.jpg';
import blogImg4 from '../../assets/images/blog/blog-4.jpg';
import blogImg5 from '../../assets/images/blog/blog-5.jpg';

const Blog = () => {

    const blogSettings = {
        dots: true,
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
                    dots: false,
                    arrows: false,
                }
            },
            {

                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="ras-blog ras-blog-2">
                <div className="container">
                    <Fade bottom>
                        <h2 className="text-center mb-50">See our latest & popular tips & tricks<br /> <span className="color-title">from our Experts</span></h2>
                    </Fade>
                    <div className="ras-blog-2-slider">
                        <Slider {...blogSettings}>
                            <SinglePost 
                                blogClass = 'ras-blog-single'
                                blogImage = {blogImg1}
                                blogTitle = 'How to growing your business tips & tricks'
                                blogAuthor = 'Philip Hobs'
                                blogPublishedDate = '02 feb, 2021'
                            />
                            <SinglePost 
                                blogClass = 'ras-blog-single'
                                blogImage = {blogImg2}
                                blogTitle = 'How to growing your business tips & tricks'
                                blogAuthor = 'Philip Hobs'
                                blogPublishedDate = '02 feb, 2021'
                            />
                            <SinglePost 
                                blogClass = 'ras-blog-single'
                                blogImage = {blogImg3}
                                blogTitle = 'How to growing your business tips & tricks'
                                blogAuthor = 'Philip Hobs'
                                blogPublishedDate = '02 feb, 2021'
                            />
                            <SinglePost 
                                blogClass = 'ras-blog-single'
                                blogImage = {blogImg4}
                                blogTitle = 'How to growing your business tips & tricks'
                                blogAuthor = 'Philip Hobs'
                                blogPublishedDate = '02 feb, 2021'
                            />
                            <SinglePost 
                                blogClass = 'ras-blog-single'
                                blogImage = {blogImg5}
                                blogTitle = 'How to growing your business tips & tricks'
                                blogAuthor = 'Philip Hobs'
                                blogPublishedDate = '02 feb, 2021'
                            />
                        </Slider>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Blog;