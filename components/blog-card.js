import React from 'react'

const BlogCard = ({
    backgroundImg,
    subtitle,
    date,
    title,
    link
}) => {
    return (
        <div className="blog-card">
            <div className="blog-card__image" style={{ backgroundImage: `url(${backgroundImg})`}}></div>
            <div className="blog-card__content">
                <div className="blog-card__info">
                    <div className="blog-card__subtitle paragraph mb-xs">{subtitle}</div>
                    <div className="blog-card__date heading-6--caps">{date}</div>
                </div>
                <div className="blog-card__title heading-4">{title}</div>
                <a className="blog-card__link paragraph--small-underlined" href={link}>Read Article</a>
            </div>
        </div>
    )
}

export default BlogCard;
