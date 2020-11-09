import HeroContent from '../hero-content';
import AttributesBox from '../attributes-box';

const RemedyDetailsHeroContentRight = ({
	className = '',
	title,
	description,
	handle,
	subtitle = 'take on the protected properties of plants',
	details = {},
	attributes = {},
}) => {
	return (
		<HeroContent
			className={className}
			backgroundColor={handle || 'color-secondary'}
			content={
				<div className="hero-remedy-details">
					<h1 className="hero-remedy-details__title heading-1 text-color-white mb-xxl">
						{title}
					</h1>
					<div className="hero-remedy-details__subtitle heading-6--caps text-color-white mb-lg">
						{details.subtitle || subtitle}
					</div>
					<div className="hero-remedy-details__info paragraph text-color-white mb-xxl">
						{details.description || description}
					</div>
					<AttributesBox {...attributes} />
					{/*
            <div className='hero-remedy-details__certification certification'>
              <div className='certification__item'></div>
              <div className='certification__item'></div>
              <div className='certification__item'></div>
              <div className='certification__item'></div>
              <div className='certification__item'></div>
            </div> 
            */}
				</div>
			}
		/>
	);
};

export default RemedyDetailsHeroContentRight;
