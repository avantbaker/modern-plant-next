import React from 'react'
import Button from './button';
import BoxTitle from './box-title';

export default function BigCard({
    subtitle,
    title,
    src,
    linkText
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
                <Button text={linkText} />
            </div>
        </div>
    )
}
