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

export default function RemediesHeroContainer({ data }) {
  return (
    <ReactFullpage
        verticalCentered={false}
        fadingEffect={true}
        responsive={500}
        render={() => {
        return (
          <ReactFullpage.Wrapper>
            {data && data.edges && data.edges.map((product, i) => {
              const metaData = remedies.find((item) => item.slug === product.node.handle);
  
              return (
                <SplitHero
                  className='section split-hero__remedies'
                  key={product.node.id}
                  overlay={<RemediesHeroOverlay slug={product.node.handle} productID={product.node.id} />}
                  contentLeft={<RemediesHeroContentLeft 
                    title={product.node.title}
                    color={metaData && metaData.color ? metaData.color : 'color-primary'}
                  />}
                  contentRight={<RemediesHeroContentRight 
                    backgroundColor={metaData && metaData.color ? metaData.color : 'color-primary'}
                  />}
                />
              )
            })}
            <Footer key={'footer'} className="section fp-auto-height fullpage-footer" />
          </ReactFullpage.Wrapper>
        );
      }}
      ></ReactFullpage>
  );
}
