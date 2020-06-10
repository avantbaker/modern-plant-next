import React from 'react';
import ProductGallery from '../product-gallery';
import Button from '../button';
import Input from '../input';

export default function RemedyDetailsPurchasingContainer() {
  return (
    <div className='remedy-details-purchasing container _80'>
      <ProductGallery />
      <div className='product-details'>
        <div className='product-details__title heading-3 mb-md'>Your Desert Sage Terpenes</div>
        <div className='product-details__subtitle heading-5 mb-xxl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, itaque! Modi, natus
          libero doloribus dicta maiores omnis, officia id tenetur consequatur ullam, aliquid
          aspernatur? Suscipit exercitationem beatae dolorum accusamus eius!
        </div>
        <Button text='Subscribe' className="mb-md" />
        <div className='heading-6'>Make wellness a part of your routine</div>
        <div className='product-details__info paragraph--small mb-md'>
          Subscribe to Deset Sage and get your monthly or weekly box of terpenes delivered to your
          door, on schedule. No more forgetting to order, running out, or overpaying - you save 30%
          when you subscribe to your wellness box.
        </div>
        <div className="mb-xxl">
            <a href='#' class='paragraph--small-underlined'>
            Learn more about our subscription boxes.
            </a>
        </div>
        <div className='order-controls product-details__order-controls mb-lg'>
          <Button text='Add to Cart' />
          <Input placeholder={1} />
          <div className='increment-controls product-details__increment-controls'>
            <div className='increment-controls__control increment-controls__control--increase'>
              +
            </div>
            <div className='increment-controls__control increment-controls__control--decrease'>
              -
            </div>
          </div>
          <div className='order-controls__type'>
              <div className="heading-5">Box</div>
          </div>
        </div>
        <div className='product-details__caption paragraph--small'>
          One box contains 4 vials of Modern Plant Desert Sage Terpene remedy. This allows you to
          take the suggested minimym of 1 vial per week for a month.
        </div>
      </div>
    </div>
  );
}
