/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@emotion/core'
import Button from './button';

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
}) => {

  if (type) {
    className = `${className} hero-content--${type}`;
  }

  if (backgroundColor) {
    className = `${className} bg-${backgroundColor}`;
  }
  
  return (
    <div className={`hero-content ${className}`}>
      <div className="hero-content__content">
        {
          content ? content : (
            <Fragment>
              <div className="hero-content__background">{
                showBackground &&
                <div className="hero-content__fingerprint">
                  <img className="responsive-img" src="global/fingerprint-grey.png" alt=""/>
                </div>
              }</div>
              <h1 className="heading-1">{ title }</h1>
              <h6 className="heading-6--caps">{ subtitle }</h6>
              <h5 className="heading-5 hero-content__paragraph">{paragraph}</h5>
              <Button text={buttonText} />
            </Fragment>
          )
        }
      </div>
      { children }
    </div>
  );
}

export default HeroContent;