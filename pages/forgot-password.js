import React from 'react';
import Page from '@components/page';
import SplitHero from '@components/split-hero';
import HeroBackground from '@components/hero-background'
import ForgotPasswordForm from '@components/ForgotPasswordForm';

export default function Contact() {
  return (
    <Page title="Contact">
      <SplitHero 
          contentLeft={<HeroBackground src='/images/global/spillage.png' />}
          contentRight={
            <ForgotPasswordForm />
          }
      />
    </Page>
  );
}
