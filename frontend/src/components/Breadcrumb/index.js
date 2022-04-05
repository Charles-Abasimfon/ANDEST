import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
	const { pageTitle } = props;

	return (
		<div className="ras-breadcrumb">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="ras-breadcrumb-menu">
							<li class="breadcrumb-item">
								<Link to="/">Home</Link>
							</li>
							<li class="breadcrumb-item">{pageTitle ? pageTitle : 'About'}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Breadcrumb;




