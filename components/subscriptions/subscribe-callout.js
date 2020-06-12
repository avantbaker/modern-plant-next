import ContentBlock from '../content-block';

const subscribeContentBlockData = [
  {
    title: 'Lorem Ipsum dolor sic amet',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dignissimos quo error sapiente magnam tempora ex sint modi aspernatur itaque deserunt doloribus praesentium placeat corporis, odio tempore architecto! Eaque, ipsam! '
  },
  {
    title: 'Lorem Ipsum dolor sic amet',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dignissimos quo error sapiente magnam tempora ex sint modi aspernatur itaque deserunt doloribus praesentium placeat corporis, odio tempore architecto! Eaque, ipsam! '
  },
  {
    title: 'Lorem Ipsum dolor sic amet',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dignissimos quo error sapiente magnam tempora ex sint modi aspernatur itaque deserunt doloribus praesentium placeat corporis, odio tempore architecto! Eaque, ipsam! '
  },
]

const SubscribeCallout = () => {
  return (
    <div className="subscribe-callout container-fluid">
      <div className="subscribe-callout__left">
        <div className="subscribe-callout__title heading-1">
          Subscribe
        </div>
        <div className="subscribe-callout__img-wrapper" style={{ backgroundImage: `url(/images/subscriptions/curology-boxes.png)`}}>
          <img src="/images/global/stamp-black.png" alt="" className="subscribe-callout__watermark" />
        </div>
      </div>
      <div className="subscribe-callout__right subscribe-callout__content-blocks">
        { 
          subscribeContentBlockData.map((item) => (
            <ContentBlock 
              className="subscribe-callout__content-block" 
              {...item}
            />
          )) 
        }
      </div>
    </div>
  )
}

export default SubscribeCallout