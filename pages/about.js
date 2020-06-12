import { Fragment } from 'react';
import Head from 'next/head';
import SplitHero from '../components/split-hero';
import HeroContent from '../components/hero-content';
import HeroBackground from '../components/hero-background';
import CalloutSection from '../components/callout-section';
import BoxTitle from '../components/box-title';
import FluidGallerySection from '../components/fluid-gallery-section';
import InstagramGallery from '../components/home/grid-gallery-section';

export default function Subscriptions() {
  return (
    <Fragment>
      <Head>
        <title>Modern Plant - About</title>
      </Head>
      <div className='page-container'>
        <SplitHero
          contentLeft={<HeroBackground src='/images/about/sink.png' />}
          contentRight={<HeroContent title='Bold Purveyors of Wellness' />}
        />
        <div className='about-callout container _80'>
          <div className='about-callout__section about-callout__left'>
            <div
              className='about-callout__content content'
              style={{ backgroundImage: `url(/images/about/flowersinvase.png)` }}
            />
          </div>
          <div className='about-callout__section about-callout__right'>
            <div className='about-callout__content content'>
              <BoxTitle className="about-callout__box-title" text='Live Radically Well' />
              <div className='about-callout__caption heading-4'>
                Traditional apothercary remedies, refined- and with a modern spin
              </div>
            </div>
          </div>
        </div>
        <div className="about-team container _80">
            <h3 className="about-team__title heading-3 mb-xxl">Our Team</h3>
            <div className="about-team__cards scrollable-cards">
                <div className="about-team__card team-card scrollable-cards__card">
                    <div className="team-card__left">
                        <div className="team-card__image-wrapper" style={{ backgroundImage: `url(/images/global/apothecary.png)` }} />
                    </div>
                    <div className="team-card__right">
                        <div className="heading-5 mb-sm">John Smith</div>
                        <div className="heading-6 mb-md">Lead Geneticist</div>
                        <div className="paragraph--small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis libero repellat eum quae fugiat officiis asperiores aliquam sequi. Exercitationem pariatur eaque numquam possimus ut cupiditate vitae neque quod adipisci illum?</div>
                    </div>
                </div>
                <div className="about-team__card team-card scrollable-cards__card">
                    <div className="team-card__left">
                        <div className="team-card__image-wrapper" style={{ backgroundImage: `url(/images/global/apothecary.png)` }} />
                    </div>
                    <div className="team-card__right">
                        <div className="heading-5 mb-sm">John Smith</div>
                        <div className="heading-6 mb-md">Lead Geneticist</div>
                        <div className="paragraph--small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis libero repellat eum quae fugiat officiis asperiores aliquam sequi. Exercitationem pariatur eaque numquam possimus ut cupiditate vitae neque quod adipisci illum?</div>
                    </div>
                </div>
                <div className="about-team__card team-card scrollable-cards__card">
                    <div className="team-card__left">
                        <div className="team-card__image-wrapper" style={{ backgroundImage: `url(/images/global/apothecary.png)` }} />
                    </div>
                    <div className="team-card__right">
                        <div className="heading-5 mb-sm">John Smith</div>
                        <div className="heading-6 mb-md">Lead Geneticist</div>
                        <div className="paragraph--small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis libero repellat eum quae fugiat officiis asperiores aliquam sequi. Exercitationem pariatur eaque numquam possimus ut cupiditate vitae neque quod adipisci illum?</div>
                    </div>
                </div>
                <div className="about-team__card team-card scrollable-cards__card">
                    <div className="team-card__left">
                        <div className="team-card__image-wrapper" style={{ backgroundImage: `url(/images/global/apothecary.png)` }} />
                    </div>
                    <div className="team-card__right">
                        <div className="heading-5 mb-sm">John Smith</div>
                        <div className="heading-6 mb-md">Lead Geneticist</div>
                        <div className="paragraph--small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis libero repellat eum quae fugiat officiis asperiores aliquam sequi. Exercitationem pariatur eaque numquam possimus ut cupiditate vitae neque quod adipisci illum?</div>
                    </div>
                </div>
            </div>
        </div>
        <CalloutSection
          title={'Is this right for you?'}
          subtitle={
            "We can find out. Don't sleep on your DNA, let's find out what the right terpene blends are for you."
          }
          buttonText={'Learn More'}
          boxTitleText={'Live Radically Well'}
        />
        <div className="about-partners container _80">
            <div className="about-partners__title heading-3 mb-xxl">Our Partners</div>
            <div className="about-partners__logos">
                <div className="about-partners__logo-container">
                    <img src="/images/about/partner2.png" alt="" className="about-partners__logo img-responsive"/>
                </div>
                <div className="about-partners__logo-container">
                    <img src="/images/about/partner3.png" alt="" className="about-partners__logo img-responsive"/>
                </div>
                <div className="about-partners__logo-container">
                    <img src="/images/about/partner1.png" alt="" className="about-partners__logo img-responsive"/>
                </div>
            </div>
        </div>
        <FluidGallerySection />
        <InstagramGallery />
      </div>
    </Fragment>
  );
}
