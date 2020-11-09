import React, { useEffect } from 'react';
import ProductGallery from '../product-gallery';
import Button from '../button';
import Input from '../input';
import graphql from '../../lib/graphql';
import {
	CART_CHECKOUT_CREATE_MUTATION,
	CART_ADD_LINE_ITEMS_MUTATION,
} from '../../graphql';
import { AppContext } from '../AppContext';
import AddToCartButton from '../AddToCartButton';
import { createSubscription } from 'lib/recharge';

export default function RemedyDetailsPurchasingContainer({
	title,
	id,
	description,
	checkout,
	updateContext,
	details,
	...props
}) {
	const [quantity, setQuantity] = useState(1);

export default function RemedyDetailsPurchasingContainer({ title, id, description, images, checkout, updateContext, ...props }) {

  // Shopify expects the product variantId when creating or adding to a checkout
  const variantId = props.variants && props.variants.edges && props.variants.edges.length > 0 && props.variants.edges[0].node.id;
  return (
    <div className='remedy-details-purchasing container _80'>
      <ProductGallery images={images} />
      <div className='product-details'>
        <div className='product-details__title heading-3 mb-md'>Your {title} Terpenes</div>
        <div className='product-details__subtitle heading-5 mb-xxl'>  
          {description}
        </div>
 
        <Button text='Subscribe' className="mb-md" onClick={async () => {
          const res = await createSubscription(variantId);

          console.log('creating subscription', res);
        }} />

        <div className="aod_buynow"></div>
        <div className='heading-6'>Make wellness a part of your routine</div>
        <div className='product-details__info paragraph--small mb-md'>
          Subscribe to {title} and get your monthly or weekly box of terpenes delivered to your
          door, on schedule. No more forgetting to order, running out, or overpaying - you save 30%
          when you subscribe to your wellness box.
        </div>
        <div className="mb-xxl">
            <a href='#' className='paragraph--small-underlined'>
            Learn more about our subscription boxes.
            </a>
        </div>
        <div className='order-controls product-details__order-controls mb-lg'>
          <AppContext.Consumer>
            {({ context }) => {
              return (
                <AddToCartButton productId={id} quantity client={context.shopifyClient} />
              )
            }}
          </AppContext.Consumer>
          {/* <Input value={quantity} type="number" min="1" /> */}
          {/* <div className='increment-controls product-details__increment-controls'>
          <a onClick={() => setQuantity(quantity + 1)} className='increment-controls__control increment-controls__control--increase'>
          +
          </a>
          <a onClick={() => quantity > 1 && setQuantity(quantity - 1)} className='increment-controls__control increment-controls__control--decrease'>
              -
            </a>
          </div> */}
          {/* <div className='order-controls__type'>
              <div className="heading-5">Box</div>
          </div> */}
        </div>
        <div className='product-details__caption paragraph--small'>
          One box contains 4 vials of Modern Plant {title} Terpene remedy. This allows you to
          take the suggested minimym of 1 vial per week for a month.
        </div>
      </div>
    </div>
  );
}
