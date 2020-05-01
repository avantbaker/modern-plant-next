import React from 'react'

export default function BlueBandSection({ children }) {
    return (
        <section className="blue-band">
            <div className="blue-band__background">
                { children }
            </div>
        </section>
    )
}
