import React from 'react'

export default function Button({
    type = 'primary',
    text,
    className = ''
}) {
    return (
        <button className={`btn btn-${type} heading-6 ${className}`}>{ text }</button>
    )
}
