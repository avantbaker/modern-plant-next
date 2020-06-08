import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

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
                    <div className="hero-gallery__controls-wrapper">
                        <FontAwesomeIcon className="hero-gallery__icon" icon={faChevronLeft} />
                        <FontAwesomeIcon className="hero-gallery__icon" icon={faChevronRight} />
                    </div>
                </div>
            </div>
        </div>
    )
}
