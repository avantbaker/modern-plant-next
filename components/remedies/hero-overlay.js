import React from 'react';
import Button from '../button';
import Link from 'next/link';

export default function RemediesHeroOverlay({ slug = '', productID = '' }) {
	return (
		<div className="hero-overlay">
			<div className="hero-overlay__center-container hero-overlay__center-container--bottle">
				<img
					src="/images/global/modern-bottle-white.png"
					alt=""
					className="responsive-img"
				/>
			</div>
			<div className="hero-overlay__bottom-right-container">
				<div className="hero-overlay__button-container">
					<Link href={`/remedies/${productID}`}>
						<Button type="secondary--white" text="Fight Sickness Now" />
					</Link>
				</div>
			</div>
		</div>
	);
}
