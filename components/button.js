import React from 'react'

export default function Button({
    type = 'primary',
    text
}) {
    return (
        <button className={`btn btn-${type} heading-6`}>{ text }</button>
    )
}
