
import { Link } from 'react-router-dom';

const RecentPost = (props) => {
    const { postClass, postImage, postTitle, postPublishedDate } = props;
    return (
        <div className={postClass ? postClass : 'ras-recent-item'}>
            <Link to="/blog/blog-details">
                <img 
                    src={postImage} 
                    alt={postTitle}
                    class="ras-recent-img"
                />
            </Link>
            <div class="ras-recent-item-info">
                <Link to="/blog/blog-details" class="recent-timeline">{postPublishedDate ? postPublishedDate : '12 September 2021'}</Link>
                <h3 class="ras-recent-title"><Link to="/blog/blog-details">{postTitle ? postTitle : 'Lorem ipsum dolor sit amet Lorem ipsum'}</Link></h3>
            </div>
        </div>

    )
}

export default RecentPost