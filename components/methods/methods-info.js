import React from 'react';
import SplitSection from '../split-section';
import BoxTitle from '../box-title';

export default function MethodsInfoSection() {
	return (
		<SplitSection
			className="methods-info container _80"
			contentLeft={
				<div className="methods-info__left">
					<div className="content-block mb-xxl">
						<div className="content-block__title heading-4 mb-lg">
							Harness The Power Of Plants
						</div>
						<p className="content-block__paragraph paragraph">
							All of our Modern Plant Blends are locally sourced from plant materials from
							different hemp farms in California. One of them being, Tera Growth in
							Ventura, CA. It’s one of the most respected and sought after hemp farms in
							the US. Our blends are USDA approved and are of the highest quality.
						</p>
					</div>
					<div className="content-block">
						<div className="content-block__title heading-4 mb-lg">
							Align With Your DNA
						</div>
						<p className="content-block__paragraph paragraph">
							We make products just for YOU. Simple as that. By understanding your DNA we
							can customize our products to directly benefit you and your body. This is
							the most effective way to target pain, crush illness and make sure you’re
							functioning at the peak of your wellness at all times.
						</p>
					</div>
				</div>
			}
			contentRight={
				<div
					className="methods-info__right"
					style={{ backgroundImage: `url(/images/global/fingerprint-grey.png)` }}
				>
					<BoxTitle text="The power of plants" />
					<div
						style={{ margin: '2rem 0' }}
						className="methods-info__subtext heading-6--caps"
					>
						combined with
					</div>
					<BoxTitle text="The power of Dna" />
				</div>
			}
		/>
	);
}
