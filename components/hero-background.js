import React from 'react';

const HeroBackground = ({ src }) => {
  return (
    <div
      className='hero-background'
      style={{
        'backgroundImage': `url(${src})`
      }}
    />
  );
};

export default HeroBackground;