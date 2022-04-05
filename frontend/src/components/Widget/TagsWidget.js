import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const TagsWidget = () => {
    return (
        <div className="ras-widget-popular-tags mt-40">
            <Fade bottom>
                <h3 className="ras-widget-title">Tags</h3>
            </Fade>
            <Fade bottom>
                <div className="popular-tags">
                    <Link to="#" class="tag">Business</Link>
                    <Link to="#" class="tag">Agency</Link>
                    <Link to="#" class="tag">Art</Link>
                    <Link to="#" class="tag">Development</Link>
                    <Link to="#" class="tag">Wordpress</Link>
                    <Link to="#" class="tag">Design</Link>
                    <Link to="#" class="tag">Trend</Link>
                </div>
            </Fade>
        </div>
    )
}

export default TagsWidget;