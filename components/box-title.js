import React from 'react'

export default function BoxTitle({ text, children }) {
    return (
        <h2 className="heading-2 box-title">{ text || children }</h2>
    )
}
