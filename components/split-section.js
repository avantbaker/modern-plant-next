import React from 'react'

export default function SplitSection({
    className = '',
    contentLeft = '',
    contentRight = '',
}) {
    return (
        <div className={`split-section ${className}`}>
            {contentLeft}
            {contentRight}
        </div>
    )
}
