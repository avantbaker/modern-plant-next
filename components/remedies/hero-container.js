import SplitHero from '../split-hero';
import RemediesHeroOverlay from './hero-overlay';
import RemediesHeroContentLeft from './hero-content-left';
import RemediesHeroContentRight from './hero-content-right';
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from '../footer';

let remedies = [
	{
		title: 'Desert Sage',
		color: 'color-secondary',
		slug: 'desert-sage',
		attributes: {},
	},
	{
		title: 'Cherry Wine',
		color: 'color-tertiary',
		slug: 'cherry-wine',
		attributes: {
			description: 'Decreases inflammation and anti-viral conditions',
		},
	},
	{
		title: 'Holy Lavender',
		color: 'color-primary',
		slug: 'holy-lavender',
		attributes: {},
	},
	{
		title: 'Custom Blend',
		color: 'color-secondary',
		slug: 'custom-blend',
		attributes: {
			description: 'Custom Terpene Cocktail Made Just For You',
		},
	},
];

function getAttributes(product) {
	const attributes = remedies.reduce((acc, cv) => {
		if (product.node.title.toLowerCase() === cv.title.toLowerCase()) {
			acc = cv.attributes;
		}
		return acc;
	}, {});
	return attributes;
}

function getColor(product) {
	return remedies.reduce((acc, cv) => {
		if (product.node.title.toLowerCase() === cv.title.toLowerCase()) {
			acc = cv.color;
		}
		return acc;
	}, '');
}
export default function RemediesHeroContainer({ data }) {
	console.log('Data', data);
	return (
		// <ReactFullpage
		// 	verticalCentered={false}
		// 	fadingEffect={true}
		// 	responsive={500}
		// 	render={() => {
		// 		return (
		// 			<ReactFullpage.Wrapper>
		// 				{data &&
		// 					data.edges &&
		// 					data.edges.map((product, i) => {
		// 						const metaData = remedies.find(
		// 							(item) => item.slug === product.node.handle
		// 						);
		// 						return (
		// 							<SplitHero
		// 								className="section split-hero__remedies"
		// 								key={product.node.id}
		// 								overlay={
		// 									<RemediesHeroOverlay
		// 										slug={product.node.handle}
		// 										productID={product.node.id}
		// 									/>
		// 								}
		// 								contentLeft={
		// 									<RemediesHeroContentLeft
		// 										title={product.node.title}
		// 										color={
		// 											metaData && metaData.color ? metaData.color : getColor(product)
		// 										}
		// 									/>
		// 								}
		// 								contentRight={
		// 									<RemediesHeroContentRight
		// 										attributes={getAttributes(product)}
		// 										backgroundColor={
		// 											metaData && metaData.color ? metaData.color : getColor(product)
		// 										}
		// 									/>
		// 								}
		// 							/>
		// 						);
		// 					})}
		// 				<Footer key={'footer'} className="section fp-auto-height fullpage-footer" />
		// 			</ReactFullpage.Wrapper>
		// 		);
		// 	}}
		// ></ReactFullpage>
		<>
			{data &&
				data.edges &&
				data.edges.map((product, i) => {
					const metaData = remedies.find((item) => item.slug === product.node.handle);
					console.log('Product: ', product);
					return (
						<SplitHero
							className="section split-hero__remedies"
							key={product.node.id}
							overlay={
								<RemediesHeroOverlay
									slug={product.node.handle}
									productID={product.node.id}
								/>
							}
							contentLeft={
								<RemediesHeroContentLeft
									title={product.node.title}
									color={metaData && metaData.color ? metaData.color : getColor(product)}
								/>
							}
							contentRight={
								<RemediesHeroContentRight
									attributes={getAttributes(product)}
									backgroundColor={
										metaData && metaData.color ? metaData.color : getColor(product)
									}
								/>
							}
						/>
					);
				})}
			{/* <Footer key={'footer'} className="section fp-auto-height fullpage-footer" /> */}
		</>
	);
}
