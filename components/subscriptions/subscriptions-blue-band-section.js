import BlueBandSection from '../blue-band-section';
import SectionContent from '../section-content';

export default function SubscriptionsBlueBandSection() {
  return (
    <BlueBandSection className="subscriptions-blue-band">
      <div className='container _80'>
        <div className='row'>
          <div className='col-md-6'>
            <SectionContent 
                showStamp={false}
                title="Don't think about it"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veniam iure harum alias,
                laudantium dignissimos, eaque minima magni non quia rerum magnam recusandae quaerat
                tenetur pariatur atque! Soluta, maxime laudantium! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Quam culpa totam a assumenda fugit aut eos quod vel officia tempore,
                fugiat, quisquam explicabo blanditiis accusamus quae maiores nemo in reiciendis. Lorem
                ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
          <div className='col-md-6 relative w-100'>
              <img src="/images/subscriptions/pieceofcake.png" alt="" className="subscriptions-blue-band__img"/>
          </div>
        </div>
      </div>
    </BlueBandSection>
  );
}
