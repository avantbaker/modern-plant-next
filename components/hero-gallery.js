import React from 'react'
import GalleryControls from './gallery-controls'

export default function HeroGallery({
    slides = [],
    content = null,
    className = ""
}) {
    return (
        <div className={`hero-gallery ${className}`}>
            {
                slides.map((slide, i) => 
                    <div 
                        key={i}
                        className={`hero-gallery__slide hero-gallery__slide--${i}`}
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
                    />
                </div>
            </div>
        </div>
    )
}
