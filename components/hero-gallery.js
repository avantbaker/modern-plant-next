import React, { useState } from 'react'
import GalleryControls from './gallery-controls'

export default function HeroGallery({
    slides = [],
    content = null,
    className = ""
}) {
    const [activeIndex, setActiveSlide] = useState(0);
    const [interval, resetInterval] = useState(5000);
    
    // setInterval(() => {
    //     activeIndex < (slides.length - 1) ? setActiveSlide(activeIndex + 1) : setActiveSlide(0);
    // }, interval);

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
                        increment={() => activeIndex < (slides.length - 1) && setActiveSlide(activeIndex + 1) && resetInterval(5000)}
                        decrement={() => activeIndex > 0 && setActiveSlide(activeIndex - 1) && resetInterval(5000)}
                    />
                </div>
            </div>
        </div>
    )
}
