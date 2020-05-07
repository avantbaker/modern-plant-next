import React from 'react'
import Button from '../button';

export default function BackgroundCalloutContainer() {
    return (
        <div className='background-section row' style={{ backgroundImage: `url(${'home/bottles.png' })` }}>
          <div className="background-section__overlay"></div>
          <div className='background-section__container col-xs-12 col-sm-offset-6 col-md-offset-7'>
            <div className='background-section__content'>
              <h3 className="heading-3 background-section__title mb-xl">Your Wellness Answers</h3>
              <p className="paragraph background-section__details mb-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deleniti nisi voluptas dolor incidunt explicabo, vero vel! Perferendis nam similique, sit, voluptas vel blanditiis iste iure ab illum laudantium dicta.</p>
              <div className="background-section__button mb-xl">
                <Button text="My Account" type="secondary" />
              </div>
            </div>
          </div>
        </div>
    )
}
