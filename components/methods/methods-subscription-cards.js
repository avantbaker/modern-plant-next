import SubscriptionCard from '../subscription-card';

const cardData = [
    {
        imageSrc: '/images/global/greenbottle.png',
        title: 'Lorem ipsum dolor',
        info: 'Upload your Diagnomics DNA Data.. Lorem ipsum dolor sit amet, consectetur adipiscing',
        price: 'Free',
        caption: 'Upload your Diagnomics DNA Data.. Lorem ipsum dolor sit amet, consectetur adipiscing',
        buttonText: 'Add to Cart'
    },
    {
        imageSrc: '/images/global/boxlove.png',
        title: 'Lorem ipsum dolor',
        info: 'Upload your Diagnomics DNA Data.. Lorem ipsum dolor sit amet, consectetur adipiscing',
        price: 'Free',
        caption: 'Upload your Diagnomics DNA Data.. Lorem ipsum dolor sit amet, consectetur adipiscing',
        buttonText: 'Add to Cart'
    },
    {
        imageSrc: '/images/global/milk.png',
        title: 'Lorem ipsum dolor',
        info: 'Upload your Diagnomics DNA Data.. Lorem ipsum dolor sit amet, consectetur adipiscing',
        price: '$150',
        caption: 'Upload your Diagnomics DNA Data.. Lorem ipsum dolor sit amet, consectetur adipiscing',
        buttonText: 'Add to Cart'
    }
];

const MethodsSubscriptionCards = ({ products }) => {
    console.log('pro', products);
    return (
        <div className='subscription-options container _80'>
            <h4 className='heading-3 mb-xxl'>You've got Options</h4>
            <div className='subscription-options__cards'>{
                products && products.edges && products.edges.map((product, i) => {
                    if (i > 2) {
                        return null;
                    }
                    return <SubscriptionCard product={product.node} key={product.node.id} />  
                })
            }</div>
        </div>
    )
}


export default MethodsSubscriptionCards