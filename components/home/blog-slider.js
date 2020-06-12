import React from 'react'
import Button from '../button';
import BlogCard from '../blog-card';
const leavesonbottle = require('../../public/images/global/leavesonbottle.png');

export default function BlogSlider() {
    return (
        <div className="blog-slider">
            <div className="container _80">
                <h3 className="heading-3 mb-xxl">Latest News</h3>
            </div>
            <div className="blog-slider__wrapper mb-xxl">
                {
                    new Array(6).fill(null).map(() => 
                        <BlogCard 
                            backgroundImg={leavesonbottle}
                            subtitle={'Fortune Magazine'}
                            date={'MAY 10, 2020'}
                            title={'Plants with a plant. A terpene supplement brand.'}
                            link={'#'}
                        />
                    )
                }
                <div className="spacer">spacer</div>
            </div>
            <div className="blog-card__all container _80">
                <Button text="All News" className="blog-card__btn"/>
            </div>
        </div>
    )
}
