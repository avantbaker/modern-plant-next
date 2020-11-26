import Button from './button';
import BoxTitle from './box-title';
import Link from 'next/link';
import { AppContext } from '@components/AppContext';
import BuyNowButton from '@components/BuyNowButton';

export default function CalloutSection({
	title = '',
	subtitle = '',
	buttonText = '',
	boxTitleText = '',
	handle = 'desert-sage',
	id,
}) {

	console.log('id', id);

	return (
		<div className={`callout-setion container-fluid bg-${handle}`}>
			<div className="callout-section__container container _80">
				<div className="callout-section__left">
					<div className="heading-3 mb-sm text-color-white">{title}</div>
					<div className="heading-5 mb-xxl text-color-white">{subtitle}</div>
					{/* <Link href="/methods">
						<Button text={buttonText} type="secondary--white" />
					</Link> */}
					{id && <AppContext.Consumer>
						{({ context }) => {
							return (
								<BuyNowButton productId={id} client={context.shopifyClient} />
							);
						}}
					</AppContext.Consumer>}
				</div>
				<div className="callout-section__right">
					<BoxTitle>{boxTitleText}</BoxTitle>
				</div>
			</div>
		</div>
	);
}
