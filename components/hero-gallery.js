import React, { useState, useEffect } from 'react'
import GalleryControls from './gallery-controls'

export default function HeroGallery({
    slides = [],
    content = null,
    className = ""
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
        <div className={`hero-gallery ${className}`}>
            {
                slides.map((slide, i) => 
                <div 
                key={i}
                className={`hero-gallery__slide hero-gallery__slide--${i} ${activeIndex === i ? 'active' : ''}`}
                style={{
                    'backgroundImage': `url(${slide.src})`
                }}
                
                />
                )
            }
            <div className="hero-gallery__content-wrapper">
                <div className="hero-gallery__content">
                    {content}
                    <GalleryControls 
                        className="hero-gallery__controls-wrapper"
                        iconClass="hero-gallery__icon"
                        activeIndex={activeIndex}
                        totalSlides={slides.length}
                        increment={() => activeIndex < (slides.length - 1) && setActiveSlide(activeIndex + 1)}
                        decrement={() => activeIndex > 0 && setActiveSlide(activeIndex - 1)}
                    />
                </div>
            </div>
        </div>
    )
}
