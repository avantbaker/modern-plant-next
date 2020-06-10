import BoxTitle from './box-title';

const StepCard = ({
    step,
    title,
    details,
    imageSrc
}) => {
    return (
        <div className="step-card">
            <div className="step-card__content-container">
                <div className="step-card__content">
                    <div className="step-card__step-title heading-6--caps mb-lg">Step {step}</div>
                    <BoxTitle className="step-card__box-title mb-xxl" text={title} />
                    <div className="step-card__details paragraph">{details}</div>
                </div>
            </div>
            <div className="step-card__img" style={{ backgroundImage: `url(${imageSrc})`}} />
        </div>
    )
}

export default StepCard