import React from 'react'
import Button from '../button';
import BlogCard from '../blog-card';

export default function BlogSlider() {
    return (
        <div className="blog-slider">
            <div className='container _80'>
                <div className='row'>
                    <h3 className="heading-3 mb-xxl">Latest News</h3>
                    <div className="blog-slider__wrapper mb-xxl">
                        {
                            new Array(6).fill(null).map(() => 
                                <BlogCard 
                                    backgroundImg={'global/leavesonbottle.png'}
                                    subtitle={'Fortune Magazine'}
                                    date={'MAY 10, 2020'}
                                    title={'Plants with a plant. A terpene supplement brand.'}
                                    link={'#'}
                                />
                            )
                        }
                    </div>
                    <div className="blog-card__all">
                        <Button text="All News" className="blog-card__btn"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
