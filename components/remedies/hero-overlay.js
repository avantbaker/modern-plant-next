import React from 'react'
import Button from '../button';

export default function RemediesHeroOverlay() {
    return (
        <div className='hero-overlay'>
            <div className="hero-overlay__center-container hero-overlay__center-container--bottle">
                <img src='global/modern-bottle-white.png' alt='' className='responsive-img' />
            </div>
            <div className="hero-overlay__bottom-right-container">
                <div className="hero-overlay__button-container">
                    <Button type="secondary--white" text="Discover"/>
                </div>
            </div>
        </div>
    )
}
