import Page from '@components/page';
import SplitHero from '@components/split-hero';
import HeroBackground from '@components/hero-background'
import LoginForm from '@components/LoginForm';

export default function Contact() {
  return (
    <Page title="Contact">
      <SplitHero 
          contentLeft={<HeroBackground src='/images/global/spillage.png' />}
          contentRight={
            <LoginForm />
          }
      />
    </Page>
  );
}
