import Page from '@components/page';

import Select from 'react-dropdown-select';
import SplitHero from '@components/split-hero';
import HeroBackground from '@components/hero-background';
import HeroContent from '@components/hero-content';
import BlogCard from '@components/blog-card';

const options = [
  {
    label: 'Something',
    value: 'something else'
  },
  {
    label: 'Something',
    value: 'something else'
  },
  {
    label: 'Something',
    value: 'something else'
  },
  {
    label: 'Something',
    value: 'something else'
  },
  {
    label: 'Something',
    value: 'something else'
  },
  {
    label: 'Something',
    value: 'something else'
  }
];
export default function News() {
  return (
    <Page title='News'>
      <SplitHero
        className='news-split-hero'
        contentLeft={<HeroBackground src='/images/global/heartplant.png' />}
        contentRight={<HeroContent title='Latest News' />}
      />
      <div className='news-section container _80'>
        <div className='news-section__header'>
          <div className='news-section__content'>
            <div className='news-section__title heading-3 mb-lg'>The latest on Modern Plant</div>
            <div className='news-section__paragraph paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores illo
              blanditiis reprehenderit itaque minus optio.
            </div>
          </div>
          <div className='news-section__filter-wrapper'>
            <Select
              className='news-section__filter'
              placeholder='Filter'
              options={options}
              onChange={(values) => console.log(values)}
            />
          </div>
        </div>
        <div className='news-section__cards'>
          {new Array(10).fill(null).map(() => (
            <BlogCard
              backgroundImg={'/images/news/oldlady.png'}
              subtitle={'Fortune Magazine'}
              date={'MAY 10, 2020'}
              title={'Plants with a plant. A terpene.'}
              link={'#'}
            />
          ))}
        </div>
      </div>
    </Page>
  );
}
