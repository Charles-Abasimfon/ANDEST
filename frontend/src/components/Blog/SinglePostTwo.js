
import { Link } from 'react-router-dom';

const SinglePostTwo = ( props ) => {
    const {blogClass, blogImage, blogTitle, blogAuthor, blogPublishedDate } = props;
    return (
        <div className={blogClass ? blogClass : 'ras-blog-single'}>
            <div className="ras-blog-img">
                <Link to="/blog/blog-details"><img src={blogImage} alt={blogTitle} /></Link>
            </div>    
            <div className="ras-blog-info">
                <div className="ras-blog-meta">
                    <h3 className="ras-blog-user"><i className="icofont-user-alt-3"></i> <Link to="#"> {blogAuthor ? blogAuthor : 'Philip Hobs'}</Link></h3>
                    <h3 className="ras-blog-user"><i className="icofont-clock-time"></i> <Link to="#"> {blogPublishedDate ? blogPublishedDate : '02 feb, 2021'}</Link></h3>
                </div>

                <h3 className="ras-blog-title"><Link to="/blog/blog-details">{blogTitle ? blogTitle : 'How to growing your business tips & tricks'}</Link></h3>

                <Link to="/blog/blog-details" className="ras-blog-read-more"><i className="icofont-long-arrow-right"></i></Link>
            </div>
        </div>

    )
}

export default SinglePostTwo