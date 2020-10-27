import React, { useState, useEffect } from 'react'
import GalleryControls from './gallery-controls';

const slides = [
    {
        src: '/images/global/modern-bottle-white.png',
    },
    {
        src: '/images/global/modern-bottle-white.png',
    }
];

export default function ProductGallery({
    className = '',
}) {
    let [activeIndex, setActiveSlide] = useState(0);
    
    useEffect(() => {
        const interval = setInterval((active) => {
            if (activeIndex <= (slides.length - 1)) {
                active = activeIndex++;
                setActiveSlide(active);
            } else {
                active = 0;
                activeIndex = 0;
                setActiveSlide(0);
            }
        }, 4000, activeIndex);
        return () => clearInterval(interval);
    }, []);
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
                            <div className={`product-gallery__slide product-gallery__slide--${i} ${activeIndex === i ? 'active' : ''}`} key={i}>
                                <img src={slide.src} />
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
                    increment={() => setActiveSlide(activeIndex + 1)}
                    decrement={() => setActiveSlide(activeIndex - 1)}
                
                />
            </div>
        </div>
    )
}
