import React from 'react';

export default function AttributesBox({
	description = 'Cleansing and Preventative Properties',
}) {
	return (
		<div className="attributes-box">
			<div className="attributes-box__row">
				<div className="attributes-box__item heading-6--caps">4 mL</div>
				<div className="attributes-box__item heading-6--caps">{description}</div>
			</div>
			<div className="attributes-box__row">
				<div className="attributes-box__item heading-6--caps">Plant Based Supplement</div>
				<div className="attributes-box__item heading-6--caps">0.14 fl OZ</div>
			</div>
		</div>
	);
}
