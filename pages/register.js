import Page from '@components/page';

import SplitHero from '@components/split-hero';
import HeroBackground from '@components/hero-background';
import RegisterForm from '@components/RegisterForm';

export default function Register() {
  return (
    <Page title="Contact">
      <SplitHero 
          contentLeft={<HeroBackground src='/images/global/spillage.png' />}
          contentRight={
            <RegisterForm />
          }
      />
    </Page>
  );
}
