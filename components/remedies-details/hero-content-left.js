import React from 'react';
import HeroContent from '../hero-content';
import HeroGallery from '../hero-gallery';
import Attributes from '../attributes';

const slides = [
  {
    src: '/remedies/shaded-man.png'
  }
];

const RemedyDetailsHeroContentLeft = ({ className = '' }) => {
  return (
    <HeroContent
        className={className}
        content={
            <HeroGallery 
                className="hero-gallery--remedy-details"
                slides={slides} 
                content={
                    <div className="hero-gallery-content hero-gallery-content--remedy-details">
                        <h1 className="hero-gallery-content__title heading-1 text-color-white mb-lg">
                            Desert Sage
                        </h1>
                        <Attributes />
                    </div>
                } 
            />
        }
    />
  );
};

export default RemedyDetailsHeroContentLeft
