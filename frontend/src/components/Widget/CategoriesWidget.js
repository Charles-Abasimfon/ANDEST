import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const CategoriesWidget = () => {
    return (
        <div className="ras-widget-menu-categories mt-40">
            <Fade bottom>
                <h3 className="ras-widget-title">Category</h3>
            </Fade>
            <Fade bottom>
                <ul className="mt-40">
                    <li>
                        <Link to="#">Blue Glass Vase</Link>
                        <ul>
                            <li><Link to="#">Digital Merketing</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#">UI Design</Link>
                    </li>
                    <li>
                        <Link to="#">Business Growth</Link>
                    </li>
                    <li>
                        <Link to="#">Web Design</Link>
                    </li>
                    <li>
                        <Link to="#">Social Marketing</Link>
                    </li>
                    <li>
                        <Link to="#">Web Development</Link>
                    </li>
                </ul>
            </Fade>

        </div>
    )
}

export default CategoriesWidget;