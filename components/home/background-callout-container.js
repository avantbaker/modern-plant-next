import React from 'react';
import Button from '../button';
import Link from 'next/link';

export default function BackgroundCalloutContainer() {
	return (
		<div
			className="background-section row"
			style={{
				backgroundImage: `url(${require('@images/updates/flowersontable.jpg')})`,
			}}
		>
			<div className="background-section__overlay"></div>
			<div className="background-section__container col-xs-12">
				<div className="background-section__content">
					<h3 className="heading-3 background-section__title mb-xl">
						Your Wellness Answers Start Here
					</h3>
					<p className="paragraph background-section__details mb-xl">
						Don&#39;t sleep on your DNA. Let&#39;s find out what the right terpene blends
						are for you. Your custom blend will adapt over the course of your membership
						and engagement in the program.
					</p>
					<div className="background-section__button mb-xl">
						<Link href="/account">
							<Button text="My Account" type="secondary" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
