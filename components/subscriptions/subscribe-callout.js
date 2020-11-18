import ContentBlock from '../content-block';

const subscribeContentBlockData = [
	{
		title: 'Step 1: Take the Test',
		info: `A test kit will be sent directly to you. Rather than the industrial age approach of
    “one-size-fits-all”, genotype testing allows you a personalized product that adjusts specific
    component levels so you receive immediate benefits.`,
	},
	{
		title: 'Step 2: Analyze the Data',
		info: `Your results will be processed, analyzed and shared with you in order to determine
    the best blend of terpenes to target your health goals or address various ailments that you are
    at risk for.`,
	},
	{
		title: `Step 3: Intake and Prevent`,
		info: `Receive a package every month containing 4 bottles of personalized plant extracts
    that will positively affect your body and mind and prevent the onset of disease and illness in the
    short and long term.`,
	},
];

const SubscribeCallout = () => {
	return (
		<div className="subscribe-callout container-fluid">
			<div className="subscribe-callout__left">
				<div className="subscribe-callout__title heading-1">Subscribe</div>
				<div
					className="subscribe-callout__img-wrapper"
					style={{ backgroundImage: `url(/images/subscriptions/bottles.png)` }}
				>
					<img
						src="/images/global/stamp-black.png"
						alt=""
						className="subscribe-callout__watermark"
					/>
				</div>
			</div>
			<div className="subscribe-callout__right subscribe-callout__content-blocks">
				{subscribeContentBlockData.map((item) => (
					<ContentBlock className="subscribe-callout__content-block" {...item} />
				))}
			</div>
		</div>
	);
};

export default SubscribeCallout;
