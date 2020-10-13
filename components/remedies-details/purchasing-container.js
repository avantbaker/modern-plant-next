import React, { useEffect, useState } from 'react';
import ProductGallery from '../product-gallery';
import Button from '../button';
import Input from '../input';
import graphql from '../../lib/graphql';
import { CART_CHECKOUT_CREATE_MUTATION, CART_ADD_LINE_ITEMS_MUTATION } from '../../graphql';
import { AppContext } from '../AppContext';


export default function RemedyDetailsPurchasingContainer({ title, id, description, checkout, updateContext, ...props }) {
  const [quantity, setQuantity] = useState(1);
  
  // Shopify expects the product variantId when creating or adding to a checkout
  const variantId = props.variants && props.variants.edges && props.variants.edges.length > 0 && props.variants.edges[0].node.id;
  return (
    <div className='remedy-details-purchasing container _80'>
      <ProductGallery />
      <div className='product-details'>
        <div className='product-details__title heading-3 mb-md'>Your {title} Terpenes</div>
        <div className='product-details__subtitle heading-5 mb-xxl'>
          {description}
        </div>
        <Button text='Subscribe' className="mb-md" />
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
            {({ context, updateContext }) => (
            <Button onClick={async () => {
              let mutation, url;
              const product = {
                quantity: parseInt(quantity),
                variantId,
              }
              
              // if there is no checkout in progress, create one
              if (!context.checkout) {
                mutation = await graphql(CART_CHECKOUT_CREATE_MUTATION, product);
                
                if (mutation && mutation.data) {
                  updateContext('checkout', mutation.data?.checkoutCreate?.checkout?.id);
                  url = mutation.data.checkoutCreate.checkout.webUrl;
                }
                
              } else {
                // otherwise, add a line item to the existing checkout
                mutation = await graphql(CART_ADD_LINE_ITEMS_MUTATION, { checkoutId: context.checkout, lineItems: [product] });
                
                if (mutation && mutation.data) {

                  url = mutation?.data?.checkoutLineItemsAdd?.checkout?.webUrl;
                }
              }
              
              if (mutation && mutation.data) {
                // forwards to cart
                window.location = url;
              } 
            }} text='Add to Cart' />
          )}
          </AppContext.Consumer>
          <Input placeholder={1} type="number" onChange={(event) => setQuantity(event.target.value)} />
          {/* <div className='increment-controls product-details__increment-controls'>
          <div className='increment-controls__control increment-controls__control--increase'>
          +
          </div>
          <div className='increment-controls__control increment-controls__control--decrease'>
              -
            </div>
          </div> */}
          <div className='order-controls__type'>
              <div className="heading-5">Box</div>
          </div>
        </div>
        <div className='product-details__caption paragraph--small'>
          One box contains 4 vials of Modern Plant {title} Terpene remedy. This allows you to
          take the suggested minimym of 1 vial per week for a month.
        </div>
      </div>
    </div>
  );
}
