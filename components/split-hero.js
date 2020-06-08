import React from 'react'

export default function SplitHero({ 
    contentLeft, 
    contentRight, 
    overlay = null,
    className= "",
    key = ""
}) {
    return (
        <div className={`split-hero ${className}`} key={key}>
            { overlay }
            <div className="split-hero__left">{contentLeft}</div>
            <div className="split-hero__right">{contentRight}</div>
        </div>
    )
}
