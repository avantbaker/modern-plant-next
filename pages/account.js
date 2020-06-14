import Page from '@components/page';

import SplitHero from '@components/split-hero';
import HeroBackground from '@components/hero-background'
import Input from '@components/input'
import Button from '@components/button'

export default function Contact() {
  return (
    <Page title="Contact">
      <SplitHero 
          contentLeft={<HeroBackground src='/images/global/spillage.png' />}
          contentRight={
              <div className="contact-form">
                  <div className="contact-form__form">
                      <h1 className="contact-form__title heading-1 mb-xxl">My Account</h1>
                      <div className="contact-form__fields mb-lg">
                          <Input className="contact-form__field mb-lg" placeholder="Email" />
                          <Input className="contact-form__field mb-lg" placeholder="Password" />
                          <Button text="Log In" />
                      </div>
                      <div className="paragraph--small-underlined mb-lg">Forgot your password?</div>
                      <div className="paragraph--small-underlined">Don't Have an account? Sign up now!</div>
                  </div>
              </div>
          }
      />
    </Page>
  );
}
