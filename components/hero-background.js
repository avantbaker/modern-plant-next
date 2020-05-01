import React from 'react';

const HeroBackground = ({ src }) => {
  return (
    <div
      className='hero-background'
      style={{
        'background-image': `url(${src})`
      }}
    />
  );
};

export default HeroBackground;