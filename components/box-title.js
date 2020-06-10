import React from 'react'

export default function BoxTitle({ text, children, className = '' }) {
    return (
        <h2 className={`${className} heading-2 box-title`}>
            <div className="box-title__title">{ text || children }</div>
        </h2>
    )
}
