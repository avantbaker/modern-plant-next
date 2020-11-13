import React from 'react';

export default function GridGallery() {
	return (
		<div className="grid-gallery">
			<div
				className="grid-item"
				style={{
					backgroundImage: `url(${require('../public/images/instagram/ig1.png')})`,
				}}
			></div>
			<div
				className="grid-item"
				style={{
					backgroundImage: `url(${require('../public/images/instagram/ig2.png')})`,
				}}
			></div>
			<div
				className="grid-item"
				style={{
					backgroundImage: `url(${require('../public/images/instagram/ig3.png')})`,
				}}
			></div>
			<div
				className="grid-item"
				style={{
					backgroundImage: `url(${require('../public/images/instagram/ig4.png')})`,
				}}
			></div>
			<div
				className="grid-item"
				style={{
					backgroundImage: `url(${require('../public/images/instagram/ig5.png')})`,
				}}
			></div>
			<div
				className="grid-item"
				style={{
					backgroundImage: `url(${require('../public/images/instagram/ig6.png')})`,
				}}
			></div>
			<div
				className="grid-item"
				style={{
					backgroundImage: `url(${require('../public/images/instagram/ig7.png')})`,
				}}
			></div>
			<div
				className="grid-item"
				style={{
					backgroundImage: `url(${require('../public/images/instagram/ig8.png')})`,
				}}
			></div>
		</div>
	);
}
