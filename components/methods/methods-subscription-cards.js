import SubscriptionCard from '../subscription-card';

const cardData = [
    {
        imageSrc: '/images/global/greenbottle.png?webp',
        title: 'Lorem ipsum dolor',
        info: 'Upload your Diagnomics DNA Data.. Lorem ipsum dolor sit amet, consectetur adipiscing',
        price: 'Free',
        caption: 'Upload your Diagnomics DNA Data.. Lorem ipsum dolor sit amet, consectetur adipiscing',
        buttonText: 'Add to Cart'
    },
    {
        imageSrc: '/images/global/boxlove.png?webp',
        title: 'Lorem ipsum dolor',
        info: 'Upload your Diagnomics DNA Data.. Lorem ipsum dolor sit amet, consectetur adipiscing',
        price: 'Free',
        caption: 'Upload your Diagnomics DNA Data.. Lorem ipsum dolor sit amet, consectetur adipiscing',
        buttonText: 'Add to Cart'
    },
    {
        imageSrc: '/images/global/milk.png?webp',
        title: 'Lorem ipsum dolor',
        info: 'Upload your Diagnomics DNA Data.. Lorem ipsum dolor sit amet, consectetur adipiscing',
        price: '$150',
        caption: 'Upload your Diagnomics DNA Data.. Lorem ipsum dolor sit amet, consectetur adipiscing',
        buttonText: 'Add to Cart'
    }
];

const MethodsSubscriptionCards = () => {
    return (
        <div className='subscription-options container _80'>
            <h4 className='heading-3 mb-xxl'>You've got Options</h4>
            <div className='subscription-options__cards'>{
                cardData.map((card, i) => <SubscriptionCard {...card} />)
            }</div>
        </div>
    )
}


export default MethodsSubscriptionCards