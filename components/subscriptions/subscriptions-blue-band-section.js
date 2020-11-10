import BlueBandSection from '../blue-band-section';
import SectionContent from '../section-content';

export default function SubscriptionsBlueBandSection() {
	return (
		<BlueBandSection className="subscriptions-blue-band">
			<div className="container _80">
				<div className="row">
					<div className="col-md-6">
						<SectionContent
							showStamp={false}
							title="Don't think about it"
							subtitle="Your Wellness Awaits"
							content="Don&#39;t sleep on your DNA, let&#39;s find out what the right terpene blends are for you.
                Your custom blend will adapt over the course of your membership and engagement in the
                program."
						/>
					</div>
					<div className="col-md-6 relative w-100">
						<img
							src="/images/subscriptions/brandedbox.png"
							alt=""
							className="subscriptions-blue-band__img"
						/>
					</div>
				</div>
			</div>
		</BlueBandSection>
	);
}
