import React from 'react'
import Button from './button';
import BoxTitle from './box-title';
import Link from 'next/link';

export default function BigCard({
    subtitle,
    title,
    src,
    linkText,
    href=""
}) {
    return (
        <div className="big-card">
            <div 
                className="big-card__featured-img"
                style={{ 'backgroundImage':` url(${src})`}}
            />
            <div className="big-card__content">
                <h6 className="heading-6--caps big-card__content-title">{subtitle}</h6>
                <BoxTitle>{ title }</BoxTitle>
                <Link href={href}>
                    <Button text={linkText} />
                </Link>
            </div>
        </div>
    )
}
