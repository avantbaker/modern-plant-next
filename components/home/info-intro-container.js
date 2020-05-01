import React from 'react';
import SectionContent from '../section-content';
import BottleImages from '../bottle-images';
import BlueBandSection from '../blue-band-section';

const HomeBlueBandSection = () => {
  return (
    <BlueBandSection>
      <div className='container _80'>
        <div className='row'>
          <div className='col-md-6'>
            <SectionContent />
          </div>
          <div className='col-md-6 relative w-100'>
            <BottleImages />
          </div>
        </div>
      </div>
    </BlueBandSection>
  );
};

export default HomeBlueBandSection;