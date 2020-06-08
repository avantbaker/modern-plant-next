import HeroContent from '../hero-content';
import AttributesBox from '../attributes-box';

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

export default RemedyDetailsHeroContentRight