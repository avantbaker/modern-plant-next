import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function GalleryControls({
    className = '',
    iconClass = ''
}) {
    return (
        <div className={`gallery-controls ${className}`}>
            <FontAwesomeIcon className={`gallery-controls__icon ${iconClass}`} icon={faChevronLeft} />
            <FontAwesomeIcon className={`gallery-controls__icon ${iconClass}`} icon={faChevronRight} />
        </div>
    )
}
