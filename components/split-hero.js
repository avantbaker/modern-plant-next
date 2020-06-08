import React from 'react'

export default function SplitHero({ contentLeft, contentRight, overlay = null }) {
    return (
        <div className="split-hero">
            { overlay }
            <div className="split-hero__left">{contentLeft}</div>
            <div className="split-hero__right">{contentRight}</div>
        </div>
    )
}
