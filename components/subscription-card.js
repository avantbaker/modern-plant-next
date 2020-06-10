import Button from './button';

const SubscriptionCard = ({
    imageSrc = '',
    title = '',
    info = '',
    price = 'Free',
    caption = '',
    buttonText = 'Add to Cart',
    type = "primary",
    term = '',
    attributes = [],
    ...rest
}) => {
    return (
        <div className='subscription-card' {...rest}>
            <div
            className='subscription-card__img'
            style={{ backgroundImage: `url(${imageSrc})` }}
            ></div>
            {
                type === 'primary' && (
                    <div className='subscription-card__content'>
                        <h5 className='subscription-card__title heading-5 mb-lg'>{title}</h5>
                        <p className='subscription-card__info paragraph mb-xl'>{info}</p>
                        <h6 className='subscrition-card__price heading-6 mb-md'>{price}</h6>
                        <div className='subscription-card__caption paragraph--small mb-xxl'>{caption}</div>
                        <Button type="secondary" text={buttonText} />
                    </div>
                )
            }
            {
                type === 'secondary' && (
                    <div className='subscription-card__content subscription-card__content--secondary'>
                        <h3 className='subscription-card__title heading-3 mb-lg text-color-brand text-uppercase'>{title}</h3>
                        <h6 className='subscrition-card__price heading-6 mb-lg'>{term} | {price}</h6>
                        <div className="subscription-card__attributes mb-xxl">
                            {
                                attributes.map((attribute) => 
                                    <div className='subscrition-card__price heading-6--caps'>{attribute.text}</div>
                                )
                            }
                        </div>
                        <p className='subscription-card__info paragraph mb-xxl'>{info}</p>
                        <Button type="secondary" text={buttonText} />
                    </div>
                )
            }
        </div>
    )
}

export default SubscriptionCard