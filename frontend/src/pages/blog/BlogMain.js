import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import TagsWidget from '../../components/Widget/TagsWidget';
import SearchWidget from '../../components/Widget/SearchWidget';
import RecentPostWidget from '../../components/Widget/RecentPostWidget';
import CategoriesWidget from '../../components/Widget/CategoriesWidget';

import SinglePost from '../../components/Blog/SinglePost';

import blogImg1 from '../../assets/images/blog/blog-1.jpg'
import blogImg2 from '../../assets/images/blog/blog-2.jpg'
import blogImg3 from '../../assets/images/blog/blog-3.jpg'
import blogImg4 from '../../assets/images/blog/blog-4.jpg'
import blogImg5 from '../../assets/images/blog/blog-5.jpg'

const BlogMain = () => {

    return (
        <div className="ras-content sec-spacer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="widget-area">
                            <SearchWidget />
                            <RecentPostWidget />
                            <CategoriesWidget />
                            <TagsWidget />
                        </div>
                    </div>

                    <div className="col-lg-8 pr-34 md-pr-14">
                        <div className='ras-blog-1 ras-blog-2-center'>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Fade bottom>
                                        <SinglePost 
                                            blogClass = 'ras-blog-single'
                                            blogImage = {blogImg1}
                                            blogTitle = 'How to growing your business tips & tricks'
                                            blogAuthor = 'Philip Hobs'
                                            blogPublishedDate = '02 feb, 2021'
                                        />
                                    </Fade>
                                </div>
                                <div className="col-lg-6">
                                    <Fade bottom>
                                        <SinglePost 
                                            blogClass = 'ras-blog-single'
                                            blogImage = {blogImg2}
                                            blogTitle = 'How to growing your business tips & tricks'
                                            blogAuthor = 'Philip Hobs'
                                            blogPublishedDate = '02 feb, 2021'
                                        />
                                    </Fade>
                                </div>
                                <div className="col-lg-6">
                                    <Fade bottom>
                                        <SinglePost 
                                            blogClass = 'ras-blog-single'
                                            blogImage = {blogImg3}
                                            blogTitle = 'How to growing your business tips & tricks'
                                            blogAuthor = 'Philip Hobs'
                                            blogPublishedDate = '02 feb, 2021'
                                        />
                                    </Fade>
                                </div>
                                <div className="col-lg-6">
                                    <Fade bottom>
                                        <SinglePost 
                                            blogClass = 'ras-blog-single'
                                            blogImage = {blogImg4}
                                            blogTitle = 'How to growing your business tips & tricks'
                                            blogAuthor = 'Philip Hobs'
                                            blogPublishedDate = '02 feb, 2021'
                                        />
                                    </Fade>
                                </div>
                                <div className="col-lg-6">
                                    <Fade bottom>
                                        <SinglePost 
                                            blogClass = 'ras-blog-single'
                                            blogImage = {blogImg5}
                                            blogTitle = 'How to growing your business tips & tricks'
                                            blogAuthor = 'Philip Hobs'
                                            blogPublishedDate = '02 feb, 2021'
                                        />
                                    </Fade>
                                </div>
                                <div className="col-lg-6">
                                    <Fade bottom>
                                        <SinglePost 
                                            blogClass = 'ras-blog-single'
                                            blogImage = {blogImg3}
                                            blogTitle = 'How to growing your business tips & tricks'
                                            blogAuthor = 'Philip Hobs'
                                            blogPublishedDate = '02 feb, 2021'
                                        />
                                    </Fade>
                                </div>
                            </div>
                            <Fade bottom>
                                <div className="ras-pagination mt-30">
                                    <Link className="prev page-numbers" to="#"><i className="icofont-double-left"></i></Link>
                                    <Link className="page-numbers" to="#">1</Link>
                                    <span className="page-numbers current">2</span>
                                    <Link className="page-numbers" to="#">3</Link>
                                    <Link className="next page-numbers" to="#"><i className="icofont-double-right"></i></Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogMain;