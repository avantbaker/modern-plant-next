/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import Button from './button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const easing = [.6, -.05, .01, .99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: easing
    }
  }
};

const HeroContent = ({
  children,
  title,
  subtitle,
  paragraph,
  buttonText,
  showBackground = true,
  className = '',
  type = null,
  content,
  backgroundColor,
  href
}) => {
  if (type) {
    className = `${className} hero-content--${type}`;
  }

  if (backgroundColor) {
    className = `${className} bg-${backgroundColor}`;
  }

  return (
    <div className={`hero-content ${className}`}>
      {content ? (
        content
      ) : (
        <div className='hero-content__content'>
          <div className='hero-content__background'>
            {showBackground && (
              <div className='hero-content__fingerprint'>
                <img className='responsive-img' src='/images/global/fingerprint-grey.png' alt='' />
              </div>
            )}
          </div>
          <motion.div 
            variants={fadeInUp}
            // initial={{ opacity: 0 }} 
            // animate={{ opacity: 1 }} 
            // transition={{ duration: 1 }}
            className='heading-1'
          >
            {title}
          </motion.div>
          <h6 className='heading-6--caps'>{subtitle}</h6>
          <h5 className='heading-5 hero-content__paragraph'>{paragraph}</h5>
          {buttonText && (
            <Link href='/remedies'>
              <Button text={buttonText} />
            </Link>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default HeroContent;
