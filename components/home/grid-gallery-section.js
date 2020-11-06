import React from 'react';
import GridGallery from '../grid-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function GridGallerySection() {
	return (
		<div className="grid-gallery-section">
			<div className="grid-gallery-section__container container _80">
				<FontAwesomeIcon
					className="grid-gallery-section__icon heading-2"
					icon={faInstagram}
				/>
				<h3 className="heading-3">More of the good stuff.</h3>
				<h5 className="heading-5 mb-xxl">
					Stay Connected. <br />
					Be A Part of Our Community.
				</h5>
			</div>
			<GridGallery />
		</div>
	);
}
