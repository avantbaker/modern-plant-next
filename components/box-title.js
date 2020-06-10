import React from 'react'

export default function BoxTitle({ text, children }) {
    return (
        <h2 className="heading-2 box-title">
            <div className="box-title__title">{ text || children }</div>
        </h2>
    )
}
