import React from 'react';
import Fade from 'react-reveal/Fade';

const SearchWidget = () => {
    return (
        <div className="ras-widget-search mb-50">
            <Fade bottom>
                <div className="form-group relative">
                    <label for="search" class="sr-only">Search</label>
                    <input type="text" id="search" placeholder="Search" />
                    <button class="search-button"><i class="icofont-search-2"></i></button>
                </div>
            </Fade>
        </div>
    )
}

export default SearchWidget;