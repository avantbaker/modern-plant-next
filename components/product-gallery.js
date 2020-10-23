import React, { useState } from 'react'
import GalleryControls from './gallery-controls';

const slides = [
    {
        src: '/images/global/modern-bottle-white.png',
    },
    {
        src: '/images/global/apothecary.png',
    }
];

export default function ProductGallery({
    className = '',
}) {
    const [activeIndex, setActiveSlide] = useState(0);
    const [interval, resetInterval] = useState(5000);
    
    // setInterval(() => {
    //     activeIndex < (slides.length - 1) ? setActiveSlide(activeIndex + 1) : setActiveSlide(0);
    // }, interval);
    return (
        <div className={`product-gallery ${className}`}>  
            <div className="product-gallery__gallery-wrapper mb-xxl">
                <div className="product-gallery__watermark">
                    <img src="/images/global/fingerprint-grey.png" alt="Grey Fingerprint"/>
                </div>
                <div className="product-gallery__lightbox">
                    <div className="product-gallery__lightbox-background"></div>
                    <div className="product-gallery__lightbox-content content">
                    {
                        slides.map((slide, i) => (
                            <div className={`product-gallery__slide product-gallery__slide--${i} ${activeIndex === i ? 'active' : ''}`}>
                                <img src={slide.src} key={i} />
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
            <div className="product-gallery__gallery-controls">
                <GalleryControls 
                    className="hero-gallery__controls-wrapper"
                    iconClass="hero-gallery__icon"
                    activeIndex={activeIndex}
                    totalSlides={slides.length}
                    increment={() => setActiveSlide(activeIndex + 1) && resetInterval(5000)}
                    decrement={() => setActiveSlide(activeIndex - 1) && resetInterval(5000)}
                
                />
            </div>
        </div>
    )
}
