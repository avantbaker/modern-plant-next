import React from 'react'
import GalleryControls from './gallery-controls';

export default function ProductGallery({
    className = '',
}) {
    return (
        <div className={`product-gallery ${className}`}>  
            <div className="product-gallery__gallery-wrapper mb-xxl">
                <div className="product-gallery__watermark">
                    <img src="/images/global/fingerprint-grey.png?webp" alt="Grey Fingerprint"/>
                </div>
                <div className="product-gallery__lightbox">
                    <div className="product-gallery__lightbox-background"></div>
                    <div className="product-gallery__lightbox-content content">
                        <img src="/images/global/modern-bottle-white.png?webp" alt="Modern Plant Bottle"/>
                    </div>
                </div>
            </div>
            <div className="product-gallery__gallery-controls">
                <GalleryControls />
            </div>
        </div>
    )
}
