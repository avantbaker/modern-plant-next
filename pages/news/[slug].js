import React, { Fragment } from 'react';
import Head from 'next/head';
import GalleryControls from '@components/gallery-controls'

export default function News() {
  return (
    <Fragment>
      <Head>
        <title>Modern Plant - News Details</title>
      </Head>
      <div className='page-container'>
        <div
          className='news-background-hero'
          style={{ backgroundImage: `url(/images/global/leavesonbottle.png)` }}
        ></div>
        <div className='news-details-content container _80'>
          <div className='news-details-content__left'>
            <div className='news-details-content__source heading-5 mb-md'>Fortune Magazine</div>
            <div className='news-details-content__date heading-6'>May 10, 2020</div>
          </div>
          <div className='news-details-content__right'>
            <div className='news-details-content__title heading-2 mb-xxl'>
              Plants with a plan. A Terpene supplement bland.
            </div>
            <div className='news-details-content__article mb-xxl'>
              <p className='paragraph mb-xl'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nesciunt, culpa
                dolore quod mollitia soluta reiciendis id nostrum ullam, perspiciatis labore
                cupiditate aut magnam porro. Odio facere aspernatur nisi dicta. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Quidem explicabo velit, obcaecati suscipit
                consequatur tenetur aliquid reiciendis illum enim autem molestias, nemo sint,
                cupiditate mollitia. Perferendis officia iusto explicabo veniam?
              </p>
              <p className='paragraph mb-xl'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nesciunt, culpa
                dolore quod mollitia soluta reiciendis id nostrum ullam, perspiciatis labore
                cupiditate aut magnam porro. Odio facere aspernatur nisi dicta. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Quidem explicabo velit, obcaecati suscipit
                consequatur tenetur aliquid reiciendis illum enim autem molestias, nemo sint,
                cupiditate mollitia. Perferendis officia iusto explicabo veniam?
              </p>
              <p className='paragraph mb-xl'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nesciunt, culpa
                dolore quod mollitia soluta reiciendis id nostrum ullam, perspiciatis labore
                cupiditate aut magnam porro. Odio facere aspernatur nisi dicta. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Quidem explicabo velit, obcaecati suscipit
                consequatur tenetur aliquid reiciendis illum enim autem molestias, nemo sint,
                cupiditate mollitia. Perferendis officia iusto explicabo veniam?
              </p>
              <p className='paragraph mb-xl'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nesciunt, culpa
                dolore quod mollitia soluta reiciendis id nostrum ullam, perspiciatis labore
                cupiditate aut magnam porro. Odio facere aspernatur nisi dicta. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Quidem explicabo velit, obcaecati suscipit
                consequatur tenetur aliquid reiciendis illum enim autem molestias, nemo sint,
                cupiditate mollitia. Perferendis officia iusto explicabo veniam?
              </p>
            </div>
            <div className="news-content-footer">
                <a href="#" className="news-content-footer__link paragraph--small-underlined">Read Full Article</a>
                <GalleryControls />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
