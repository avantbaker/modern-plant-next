import StepCard from '../step-card';

const stepData = [
    {
        title: 'Upload DNA',
        details: 'Upload your Diagnomics DNA data to your personal, secure Modern Plant Profile',
        imageSrc: '/methods/2-small-bottles.png'
    },
    {
        title: 'Genetic Sequencing',
        details: 'Our labs recieve your DNA and sequence it for genetic screening and plant-based matchmaking. We find out what your body is asking for.',
        imageSrc: '/methods/test-viles.png'
    },
    {
        title: 'Genetic Reporting',
        details: 'Your genetics report is uploaded to your Modern Plant personal profile for your review',
        imageSrc: '/methods/envelopes.png'
    },
    {
        title: 'Your Subscriptions',
        details: 'Begin your journey to preventative wellness. Start your subscription to gain access to virtual doctors and receive monthy perscriptions of compatible, plant-based blends.',
        imageSrc: '/methods/boxes.png'
    },
]

const MethodsStepCardsContainer = () => {
    return (
        <div className="methods-steps container _80">
            <div className="methods-steps__title heading-3 mb-xxl">Here's how it works</div>
            <div className="methods-steps__cards">{
                stepData.map((step, i) => <StepCard step={i+1} {...step} />)
            }</div>
        </div>
    )
}

export default MethodsStepCardsContainer