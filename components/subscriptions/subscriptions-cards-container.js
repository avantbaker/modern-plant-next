import SubscriptionCard from '../subscription-card';

const cardData = [
  {
      imageSrc: '/images/global/greenbottle.png?webp',
      title: 'Lorem ipsum dolor',
      info: 'Upload your Diagnomics DNA Data.. Lorem ipsum dolor sit amet, consectetur adipiscing',
      price: '$199.99',
      term: '12 Months',
      attributes: [
        { text: '1 box per month'},
        { text: 'Pair with DNA test kit'}
      ],
      buttonText: 'Add to Cart'
  },
  {
      imageSrc: '/images/global/boxlove.png?webp',
      title: 'Lorem ipsum dolor',
      info: 'Upload your Diagnomics DNA Data.. Lorem ipsum dolor sit amet, consectetur adipiscing',
      price: '$149.99',
      term: '12 Months',
      attributes: [
        { text: '2 box per month'},
        { text: 'mix & match terpenes'},
        { text: 'Pair with dna test kit'}
      ],
      buttonText: 'Add to Cart'
  },
  {
      imageSrc: '/images/global/milk.png?webp',
      title: 'Lorem ipsum dolor',
      info: 'Upload your Diagnomics DNA Data.. Lorem ipsum dolor sit amet, consectetur adipiscing',
      price: '$299.99',
      term: '18 Months',
      attributes: [
        { text: '4 box per month'},
        { text: 'mix & match terpenes'},
        { text: 'Pair with dna test kit'},
        { text: 'Birthday box extra'},
      ],
      buttonText: 'Add to Cart'
  }
];

const SubscriptionsCardsContainer = () => {
  return (
    <div className="subscriptions-cards subscription-options container _80">
        <h4 className='heading-3 mb-xxl'>Subscribe to Regular Wellness</h4>
        <div className='subscription-options__cards'>{
            cardData.map((card, i) => <SubscriptionCard type="secondary" {...card} />)
        }</div>
    </div>
  )
}


export default SubscriptionsCardsContainer