import React from 'react'
import Button from '../button';
import BlogCard from '../blog-card';
import Link from 'next/link';
const leavesonbottle = require('../../public/images/global/leavesonbottle.png');
import Carousel from '../Carousel';

export default function BlogSlider() {
    return (
        <Carousel>
        {
            new Array(3).fill(null).map((item, i) => 
            <BlogCard 
            backgroundImg={leavesonbottle}
            subtitle={'Fortune Magazine'}
            date={'MAY 10, 2020'}
            title={'Plants with a plant. A terpene supplement brand.'}
            link={'/news/article-title'}
            key={i}
            />
            )
        }
        </Carousel>
    )
}
