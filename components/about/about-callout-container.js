import BoxTitle from '@components/box-title';

const AboutCalloutContainer = () => {
  return (
    <div className='about-callout container _80'>
      <div className='about-callout__section about-callout__left'>
        <div
          className='about-callout__content content'
          style={{ backgroundImage: `url(/images/about/flowersinvase.png)` }}
        />
      </div>
      <div className='about-callout__section about-callout__right'>
        <div className='about-callout__content content'>
          <BoxTitle className='about-callout__box-title' text='Live Radically Well' />
          <div className='about-callout__caption heading-4'>
            Traditional apothercary remedies, refined- and with a modern spin
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCalloutContainer