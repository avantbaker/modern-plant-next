import HeroContent from '../hero-content';
import AttributesBox from '../attributes-box';

const RemedyDetailsHeroContentRight = ({ className = '', title, description, handle }) => {
  return (
    <HeroContent
      className={className}
      backgroundColor={handle || 'color-secondary'}
      content={
        <div className='hero-remedy-details'>
          <h1 className='hero-remedy-details__title heading-1 text-color-white mb-xxl'>
              {title}
          </h1>
          <div className='hero-remedy-details__subtitle heading-6--caps text-color-white mb-lg'>
            take on the proteted properties of the sage plant
          </div>
          <div className='hero-remedy-details__info paragraph text-color-white mb-xxl'>
            {description}
          </div>
          <AttributesBox />
          {/*<div className='hero-remedy-details__certification certification'>
            <div className='certification__item'></div>
            <div className='certification__item'></div>
            <div className='certification__item'></div>
            <div className='certification__item'></div>
            <div className='certification__item'></div>
      </div> */}
        </div>
      }
    />
  );
};

export default RemedyDetailsHeroContentRight