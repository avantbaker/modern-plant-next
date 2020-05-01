/** @jsx jsx */
import { jsx } from '@emotion/core'

const HeroContent = ({ 
    children, 
    title, 
    subtitle, 
    paragraph, 
    buttonText, 
    showBackground = true
}) => {
  return (
    <div className="hero-content">
      <div className="hero-content__content">
        <div className="hero-content__background">{
          showBackground &&
          <div className="hero-content__fingerprint">
            <img className="responsive-img" src="global/fingerprint-grey.png" alt=""/>
          </div>
        }</div>
        <h1 className="heading-1">{ title }</h1>
        <h6 className="heading-6--caps">{ subtitle }</h6>
        <h5 className="heading-5 hero-content__paragraph">{paragraph}</h5>
        <button className="btn btn-primary heading-6">{ buttonText }</button>
      </div>
      { children }
    </div>
  );
}

export default HeroContent;