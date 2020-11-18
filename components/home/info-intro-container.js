import React from 'react';
import SectionContent from '../section-content';
import BottleImages from '../bottle-images';
import BlueBandSection from '../blue-band-section';

const HomeBlueBandSection = () => {
	return (
		<BlueBandSection>
			<div className="container _80">
				<div className="row">
					<div className="col-md-6">
						<SectionContent
							subtitle="Custom Terpene Blends Formulated Just For You!"
							content="Terpenes possess very important antiviral compounds that offer a number of health benefits
              that fight off many common illnesses such as cold, flu, stomach issues, and more.
              Our perfectly crafted terpene cocktails have the highest amount of nutrients that your genotypes have
              shown to benefit from."
						/>
					</div>
					<div className="col-md-6 relative w-100">
						<BottleImages />
					</div>
				</div>
			</div>
		</BlueBandSection>
	);
};

export default HomeBlueBandSection;
