import React from 'react'

export default function BlueBandSection({ children, className = '' }) {
    return (
        <section className={`blue-band ${className}`}>
            <div className="blue-band__background">
                { children }
            </div>
        </section>
    )
}
