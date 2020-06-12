import React from 'react'
import Button from '../button';
import Link from 'next/link';

export default function RemediesHeroOverlay({
    slug = ''
}) {
    return (
        <div className='hero-overlay'>
            <div className="hero-overlay__center-container hero-overlay__center-container--bottle">
                <img src='/images/global/modern-bottle-white.png' alt='' className='responsive-img' />
            </div>
            <div className="hero-overlay__bottom-right-container">
                <div className="hero-overlay__button-container">
                    <Link href="/remedies/[slug]" as={`/remedies/${slug}`}>
                        <Button type="secondary--white" text="Discover"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
