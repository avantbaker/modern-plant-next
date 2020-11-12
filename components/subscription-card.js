import Button from './button';
import { AppContext } from './AppContext';
import AddToCartButton from './AddToCartButton';

const SubscriptionCard = ({ product }) => {
    const buttonText = "Add To Cart";
    const { title, description, images, priceRange, productType } = product;
    console.log('product', product);

    const imageSrc = images && images.edges && images.edges.length > 0 && images.edges[0].node.originalSrc;

    const info = "hello";
    const type = "primary";
    const caption = 'hello';
    const price = priceRange && priceRange.maxVariantPrice && priceRange.maxVariantPrice.amount;
    return (
        <div className='subscription-card'>
            <div
            className='subscription-card__img'
            style={{ backgroundImage: `url(${imageSrc})` }}
            ></div>
            {
                type === 'primary' && (
                    <div className='subscription-card__content'>
                        <h5 className='subscription-card__title heading-5 mb-lg'>{title}</h5>
                        <p className='subscription-card__info paragraph mb-xl'>{productType}</p>
                        <h6 className='subscrition-card__price heading-6 mb-md'>{price}</h6>
                        <div className='subscription-card__caption paragraph--small mb-xxl'>{description}</div>
                        <AppContext.Consumer>
                            {({ context }) => {
                            return (
                                <AddToCartButton productId={product.id} client={context.shopifyClient} />
                            )
                            }}
                        </AppContext.Consumer>
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