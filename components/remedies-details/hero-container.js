import React from 'react';
import SplitHero from '../split-hero';
import RemedyDetailsHeroContentLeft from './hero-content-left';
import RemedyDetailsHeroContentRight from './hero-content-right';

export default function RemedyDetailsHeroContainer(props) {
  return (
    <SplitHero
      className='remedy-details-hero'
      contentLeft={<RemedyDetailsHeroContentLeft className='remedy-details-hero__left' {...props} />}
      contentRight={
        <RemedyDetailsHeroContentRight 
            className='remedy-details-hero__right' 
            {...props}
        />}
    />
  );
}
