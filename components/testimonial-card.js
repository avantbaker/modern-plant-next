import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const TestimonialCard = ({ imageSrc = '', name = '', title = '', info = '' }) => {
  return (
    <div className='testimonial-card'>
      <div className='testimonial-card__left'>
        <div className='testimonial-card__image-wrapper' style={{ backgroundImage: `url(${imageSrc})` }} />
      </div>
      <div className='testimonial-card__right'>
        <div className="testimonial-card__social">
          <FontAwesomeIcon className="testimonial-card__icon heading-3" icon={faTwitter} />
        </div>
        <div className='heading-5 mb-xl'>{name}</div>
        <div className='testimonial-card__info paragraph--small mb-lg'>{`"${info}"`}</div>
        <div className='heading-6'>
          <FontAwesomeIcon className="testimonial-card__icon heading-5" icon={faStar} />
          <FontAwesomeIcon className="testimonial-card__icon heading-5" icon={faStar} />
          <FontAwesomeIcon className="testimonial-card__icon heading-5" icon={faStar} />
          <FontAwesomeIcon className="testimonial-card__icon heading-5" icon={faStar} />
          <FontAwesomeIcon className="testimonial-card__icon testimonial-card__icon--unfilled heading-5" icon={faStar} />
        </div>
      </div>
    </div>
  );
};


export default TestimonialCard;