import React from 'react';
import TagsWidget from '../../components/Widget/TagsWidget';
import SearchWidget from '../../components/Widget/SearchWidget';
import RecentPostWidget from '../../components/Widget/RecentPostWidget';
import CategoriesWidget from '../../components/Widget/CategoriesWidget';

import PostContent from './PostContent';
import Commenting from './Commenting';

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

                    <div className="col-lg-8">
                        <PostContent />
                        <Commenting />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogMain;