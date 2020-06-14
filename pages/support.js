import Page from '@components/page';

import ContentBlock from '@components/content-block';
import SplitHero from '@components/split-hero';
import HeroBackground from '@components/hero-background';
import HeroContent from '@components/hero-content';
import Select from 'react-dropdown-select';
import CalloutSection from '@components/callout-section';
import BlogCard from '@components/blog-card';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';

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

const subscribeContentBlockData = [
  {
    title: 'Lorem Ipsum dolor sic amet',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dignissimos quo error sapiente magnam tempora ex sint modi aspernatur itaque deserunt doloribus praesentium placeat corporis, odio tempore architecto! Eaque, ipsam! '
  },
  {
    title: 'Lorem Ipsum dolor sic amet',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dignissimos quo error sapiente magnam tempora ex sint modi aspernatur itaque deserunt doloribus praesentium placeat corporis, odio tempore architecto! Eaque, ipsam! '
  },
  {
    title: 'Lorem Ipsum dolor sic amet',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dignissimos quo error sapiente magnam tempora ex sint modi aspernatur itaque deserunt doloribus praesentium placeat corporis, odio tempore architecto! Eaque, ipsam! '
  }
];

export default function Support() {
  return (
    <Page title='Support'>
      <SplitHero
        contentLeft={<HeroBackground src='/images/global/greenbottle.png' />}
        contentRight={
          <HeroContent
            title='Support'
            subtitle="We're making complex remedies simple"
            paragraph='What can you help you with?'
          />
        }
      />
      <div className='subscribe-callout container-fluid'>
        <div className='subscribe-callout__left'>
          <div className='subscribe-callout__title heading-1'>Terpenes</div>
          <div
            className='subscribe-callout__img-wrapper'
            style={{ backgroundImage: `url(/images/subscriptions/curology-boxes.png)` }}
          >
            <img
              src='/images/global/stamp-black.png'
              alt=''
              className='subscribe-callout__watermark'
            />
          </div>
        </div>
        <div className='subscribe-callout__right subscribe-callout__content-blocks'>
          {subscribeContentBlockData.map((item) => (
            <ContentBlock className='subscribe-callout__content-block' {...item} />
          ))}
        </div>
      </div>
      <div className='faq container _80'>
        <div className='faq__header'>
          <div className='faq__content'>
            <div className='faq__title heading-3 mb-lg'>FAQ</div>
            <div className='faq__paragraph paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores illo
              blanditiis reprehenderit itaque minus optio.
            </div>
          </div>
          <div className='faq__filter-wrapper'>
            <Select
              className='faq__filter'
              placeholder='Filter'
              options={options}
              onChange={(values) => console.log(values)}
            />
          </div>
        </div>
        <div className='faq-accordion'>
          <Accordion>
            <AccordionItem className='faq-accordion__item' expanded>
              <AccordionItemHeading>
                <AccordionItemButton className='faq-accordion__title heading-3'>
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='faq-accordion__panel'>
                <p className='paragraph mb-xl'>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat
                  consequat est minim minim esse tempor laborum consequat esse adipisicing eu
                  reprehenderit enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Animi asperiores, voluptate laboriosam rem earum consequuntur? Aut commodi placeat
                  omnis labore fugit ipsa, incidunt alias laudantium, veniam minima, dolorum nemo
                  hic?
                </p>
                <p className='paragraph mb-xl'>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat
                  consequat est minim minim esse tempor laborum consequat esse adipisicing eu
                  reprehenderit enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Animi asperiores, voluptate laboriosam rem earum consequuntur? Aut commodi placeat
                  omnis labore fugit ipsa, incidunt alias laudantium, veniam minima, dolorum nemo
                  hic?
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='faq-accordion__item'>
              <AccordionItemHeading>
                <AccordionItemButton className='faq-accordion__title heading-3'>
                  What is prevantative healthcare?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='faq-accordion__panel'>
                <p className='paragraph mb-xl'>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat
                  consequat est minim minim esse tempor laborum consequat esse adipisicing eu
                  reprehenderit enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Animi asperiores, voluptate laboriosam rem earum consequuntur? Aut commodi placeat
                  omnis labore fugit ipsa, incidunt alias laudantium, veniam minima, dolorum nemo
                  hic?
                </p>
                <p className='paragraph mb-xl'>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat
                  consequat est minim minim esse tempor laborum consequat esse adipisicing eu
                  reprehenderit enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Animi asperiores, voluptate laboriosam rem earum consequuntur? Aut commodi placeat
                  omnis labore fugit ipsa, incidunt alias laudantium, veniam minima, dolorum nemo
                  hic?
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='faq-accordion__item'>
              <AccordionItemHeading>
                <AccordionItemButton className='faq-accordion__title heading-3'>
                  Are your products vegan?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='faq-accordion__panel'>
                <p className='paragraph mb-xl'>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat
                  consequat est minim minim esse tempor laborum consequat esse adipisicing eu
                  reprehenderit enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Animi asperiores, voluptate laboriosam rem earum consequuntur? Aut commodi placeat
                  omnis labore fugit ipsa, incidunt alias laudantium, veniam minima, dolorum nemo
                  hic?
                </p>
                <p className='paragraph mb-xl'>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat
                  consequat est minim minim esse tempor laborum consequat esse adipisicing eu
                  reprehenderit enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Animi asperiores, voluptate laboriosam rem earum consequuntur? Aut commodi placeat
                  omnis labore fugit ipsa, incidunt alias laudantium, veniam minima, dolorum nemo
                  hic?
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='faq-accordion__item'>
              <AccordionItemHeading>
                <AccordionItemButton className='faq-accordion__title heading-3'>
                  Are your products FDA Approved?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='faq-accordion__panel'>
                <p className='paragraph mb-xl'>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat
                  consequat est minim minim esse tempor laborum consequat esse adipisicing eu
                  reprehenderit enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Animi asperiores, voluptate laboriosam rem earum consequuntur? Aut commodi placeat
                  omnis labore fugit ipsa, incidunt alias laudantium, veniam minima, dolorum nemo
                  hic?
                </p>
                <p className='paragraph mb-xl'>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat
                  consequat est minim minim esse tempor laborum consequat esse adipisicing eu
                  reprehenderit enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Animi asperiores, voluptate laboriosam rem earum consequuntur? Aut commodi placeat
                  omnis labore fugit ipsa, incidunt alias laudantium, veniam minima, dolorum nemo
                  hic?
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='faq-accordion__item'>
              <AccordionItemHeading>
                <AccordionItemButton className='faq-accordion__title heading-3'>
                  Can I terminate a subscription without a penalty?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='faq-accordion__panel'>
                <p className='paragraph mb-xl'>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat
                  consequat est minim minim esse tempor laborum consequat esse adipisicing eu
                  reprehenderit enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Animi asperiores, voluptate laboriosam rem earum consequuntur? Aut commodi placeat
                  omnis labore fugit ipsa, incidunt alias laudantium, veniam minima, dolorum nemo
                  hic?
                </p>
                <p className='paragraph mb-xl'>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat
                  consequat est minim minim esse tempor laborum consequat esse adipisicing eu
                  reprehenderit enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Animi asperiores, voluptate laboriosam rem earum consequuntur? Aut commodi placeat
                  omnis labore fugit ipsa, incidunt alias laudantium, veniam minima, dolorum nemo
                  hic?
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className='related-resources'>
        <div className='related-resources__content-container container _80'>
          <div className='related-resources__title heading-3 mb-xl'>
            Other terp-related sources.
          </div>
          <div className='related-resources__subtitle heading-5 mb-xxl'>
            Need to do more research first? We respect that. Learn all you can! We'll be here when
            your're done.
          </div>
        </div>
        <div className='related-resources__articles'>
          {new Array(6).fill(null).map(() => (
            <BlogCard
              backgroundImg={require('@images/global/leavesonbottle.png')}
              subtitle={'Fortune Magazine'}
              date={'MAY 10, 2020'}
              title={'Plants with a plant. A terpene supplement brand.'}
              link={'/news/article-title'}
            />
          ))}
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
    </Page>
  );
}
