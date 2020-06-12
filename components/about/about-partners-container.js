const AboutPartnersContainer = () => {
  return (
    <div className='about-partners container _80'>
      <div className='about-partners__title heading-3 mb-xxl'>Our Partners</div>
      <div className='about-partners__logos'>
        <div className='about-partners__logo-container'>
          <img
            src='/images/about/partner2.png'
            alt=''
            className='about-partners__logo img-responsive'
          />
        </div>
        <div className='about-partners__logo-container'>
          <img
            src='/images/about/partner3.png'
            alt=''
            className='about-partners__logo img-responsive'
          />
        </div>
        <div className='about-partners__logo-container'>
          <img
            src='/images/about/partner1.png'
            alt=''
            className='about-partners__logo img-responsive'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPartnersContainer;