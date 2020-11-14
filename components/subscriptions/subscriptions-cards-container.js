import SubscriptionCard from '../subscription-card';

const cardData = [
	{
		imageSrc: '/images/subscriptions/option1.jpg',
		title: 'Hello Health!',
		info:
			'Subscribe without DNA testing.  Terpene selection will be generated based on completing a health survey.',
		price: '$99/month',
		term: '12 Month',
		// attributes: [{ text: '1 box a month' }],
		buttonText: 'Subscribe Today',
	},
	{
		imageSrc: '/images/updates/windchime.jpg',
		title: 'Custom Crafted',
		info:
			'Subscribe with DNA testing that will provide you with your terpene custom blend',
		price: '$79/month',
		term: '12 Month',
		// attributes: [
		// 	{ text: '1 box per month' },
		// 	{ text: 'mix & match terpenes' },
		// 	{ text: 'Pair with dna test kit' },
		// ],
		buttonText: 'Subscribe Today',
	},
	{
		imageSrc: '/images/subscriptions/option3.jpg',
		title: 'Ahead of the Game',
		info:
			'Upload your existing DNA test results to get started on your monthly subscription.',
		price: '$79/month',
		term: '12 Month',
		// attributes: [
		// 	{ text: '1 box per month' },
		// 	{ text: 'mix & match terpenes' },
		// 	{ text: 'Pair with dna test kit' },
		// ],
		buttonText: 'Subscribe Today',
	},
];

const SubscriptionsCardsContainer = ({ products }) => {
	return (
		<div className="subscriptions-cards subscription-options container _80">
			<h4 className="heading-3 mb-xxl">Subscribe to Regular Wellness</h4>
			<div className="subscription-options__cards">
				{products &&
					products.edges &&
					products.edges.map((product, i) => {
						if (i > 2) {
							return null;
						}
						return (
							<SubscriptionCard
								type="secondary"
								product={product.node}
								key={product.node.id}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default SubscriptionsCardsContainer;
