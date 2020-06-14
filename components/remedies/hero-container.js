import SplitHero from '../split-hero';
import RemediesHeroOverlay from './hero-overlay';
import RemediesHeroContentLeft from './hero-content-left';
import RemediesHeroContentRight from './hero-content-right';
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from '../footer';

let remedies = [
    {
        title: 'Desert Sage',
        color: 'color-secondary',
        slug: 'desert-sage'
    },
    {
        title: 'Cherry Wine',
        color: 'color-tertiary',
        slug: 'cherry-wine'
    },
    {
        title: 'Holy Lavender',
        color: 'color-primary',
        slug: 'holy-lavender'
    },
];

let components = [
    ...remedies.map(({ title, color, slug }, i) => (
        <SplitHero
          className='section split-hero__remedies'
          key={i}
          overlay={<RemediesHeroOverlay slug={slug} />}
          contentLeft={<RemediesHeroContentLeft 
            title={title}
            color={color}
          />}
          contentRight={<RemediesHeroContentRight 
            backgroundColor={color}
          />}
        />
    )),
    <Footer key={'footer'} className="section fp-auto-height fullpage-footer" />
];

export default function RemediesHeroContainer() {
  return (
    <ReactFullpage
        verticalCentered={false}
        fadingEffect={true}
        responsive={500}
        render={() => {
        return (
          <ReactFullpage.Wrapper>
            {components.map((item, i) => (item))}
          </ReactFullpage.Wrapper>
        );
      }}
    ></ReactFullpage>
  );
}
