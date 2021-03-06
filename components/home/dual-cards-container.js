import React from 'react';
import BigCard from '../big-card';

export default function DualCardsContainer() {
	return (
		<section className="dual-cards container _80 p-0">
			<div className="row">
				<div className="dual-cards__card col-xs-12 col-md-6">
					<BigCard
						subtitle={'Checkout how our system works'}
						title={'Modern Methods'}
						src={require('@images/updates/homepagemodernmethods.jpg')}
						linkText={'Learn The Process'}
						href="/methods"
					/>
				</div>
				<div className="dual-cards__card col-xs-12 col-md-6">
					<BigCard
						subtitle={'See our lineup of products'}
						title={'Refined Remedies'}
						src={require('@images/updates/homepagerefinedremedies.jpg')}
						linkText={'View Our Products'}
						href="/remedies"
					/>
				</div>
			</div>
		</section>
	);
}
