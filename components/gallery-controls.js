import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function GalleryControls({
    className = '',
    iconClass = '',
    increment,
    decrement,
    activeIndex,
    totalSlides,
}) {
    return (
        <div className={`gallery-controls ${className}`}>
            <FontAwesomeIcon onClick={decrement} className={`gallery-controls__icon opacity-on-hover ${iconClass}`} icon={faChevronLeft} disabled={activeIndex <= 0} />
            <FontAwesomeIcon onClick={increment} className={`gallery-controls__icon opacity-on-hover ${iconClass}`} icon={faChevronRight} disabled={activeIndex === totalSlides} />
        </div>
    )
}
