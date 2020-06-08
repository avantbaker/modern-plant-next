import React from 'react';
import SplitHero from '../split-hero';
import HeroContent from '../hero-content';
import HeroGallery from '../hero-gallery';
import Attributes from '../attributes';
import AttributesBox from '../attributes-box';

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

const RemedyDetailsHeroContentRight = ({ className = '' }) => {
  return (
    <HeroContent
      className={className}
      backgroundColor='color-secondary'
      content={
        <div className='hero-remedy-details'>
          <h1 className='hero-remedy-details__title heading-1 text-color-white mb-xxl'>
              Desert Sage
          </h1>
          <div className='hero-remedy-details__subtitle heading-6--caps text-color-white mb-lg'>
            take on the proteted properties of the sage plant
          </div>
          <div className='hero-remedy-details__info paragraph text-color-white mb-xxl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dicta rem sint eius rerum,
            ab obcaecati eaque molestiae adipisci deleniti, nihil magnam officiis voluptas
            laboriosam repellat, placeat provident maxime quos! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Accusamus culpa mollitia soluta dolorum totam nobis sequi
            necessitatibus est quam optio. Facilis quis consectetur unde perferendis? Ut asperiores
            molestias iusto modi.
          </div>
          <AttributesBox />
          <div className='hero-remedy-details__certification certification'>
            <div className='certification__item'></div>
            <div className='certification__item'></div>
            <div className='certification__item'></div>
            <div className='certification__item'></div>
            <div className='certification__item'></div>
          </div>
        </div>
      }
    />
  );
};

export default function RemedyDetailsHeroContainer() {
  return (
    <SplitHero
      className='remedy-details-hero'
      contentLeft={<RemedyDetailsHeroContentLeft className='remedy-details-hero__left' />}
      contentRight={
        <RemedyDetailsHeroContentRight 
            className='remedy-details-hero__right' 
        />}
    />
  );
}
