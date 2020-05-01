import React from 'react'

export default function SplitHero({ contentLeft, contentRight }) {
    return (
        <div className="split-hero">
            <div className="split-hero__left">{contentLeft}</div>
            <div className="split-hero__right">{contentRight}</div>
        </div>
    )
}
