import Button from './button';

const SubscriptionCard = ({
    imageSrc = '',
    title = '',
    info = '',
    price = 'Free',
    caption = '',
    buttonText = 'Add to Cart',
    ...rest
}) => {
    return (
        <div className='subscription-card' {...rest}>
            <div
            className='subscription-card__img'
            style={{ backgroundImage: `url(${imageSrc})` }}
            ></div>
            <div className='subscription-card__content'>
                <h5 className='subscription-card__title heading-5 mb-lg'>{title}</h5>
                <p className='subscription-card__info paragraph mb-xl'>{info}</p>
                <h6 className='subscrition-card__price heading-6 mb-md'>{price}</h6>
                <div className='subscription-card__caption paragraph--small mb-xxl'>{caption}</div>
                <Button type="secondary" text={buttonText} />
            </div>
        </div>
    )
}

export default SubscriptionCard