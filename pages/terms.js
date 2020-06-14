import Page from '@components/page';
import GalleryControls from '@components/gallery-controls';

export default function News() {
  return (
    <Page title='News'>
      <div
        className='news-background-hero'
        style={{ backgroundImage: `url(/images/global/leavesonbottle.png)` }}
      ></div>
      <div className='terms container _80'>
        <div className='terms__wrapper'>
          <div className='terms__title heading-2 mb-xxl'>
            Terms and Conditions
          </div>
          <div className='terms__content mb-xxl'>
            <p className='paragraph mb-xl'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nesciunt, culpa dolore
              quod mollitia soluta reiciendis id nostrum ullam, perspiciatis labore cupiditate aut
              magnam porro. Odio facere aspernatur nisi dicta. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quidem explicabo velit, obcaecati suscipit consequatur
              tenetur aliquid reiciendis illum enim autem molestias, nemo sint, cupiditate mollitia.
              Perferendis officia iusto explicabo veniam?
            </p>
            <p className='paragraph mb-xl'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nesciunt, culpa dolore
              quod mollitia soluta reiciendis id nostrum ullam, perspiciatis labore cupiditate aut
              magnam porro. Odio facere aspernatur nisi dicta. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quidem explicabo velit, obcaecati suscipit consequatur
              tenetur aliquid reiciendis illum enim autem molestias, nemo sint, cupiditate mollitia.
              Perferendis officia iusto explicabo veniam?
            </p>
            <p className='paragraph mb-xl'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nesciunt, culpa dolore
              quod mollitia soluta reiciendis id nostrum ullam, perspiciatis labore cupiditate aut
              magnam porro. Odio facere aspernatur nisi dicta. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quidem explicabo velit, obcaecati suscipit consequatur
              tenetur aliquid reiciendis illum enim autem molestias, nemo sint, cupiditate mollitia.
              Perferendis officia iusto explicabo veniam?
            </p>
            <p className='paragraph mb-xl'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nesciunt, culpa dolore
              quod mollitia soluta reiciendis id nostrum ullam, perspiciatis labore cupiditate aut
              magnam porro. Odio facere aspernatur nisi dicta. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quidem explicabo velit, obcaecati suscipit consequatur
              tenetur aliquid reiciendis illum enim autem molestias, nemo sint, cupiditate mollitia.
              Perferendis officia iusto explicabo veniam?
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
