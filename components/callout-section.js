import Button from './button';
import BoxTitle from './box-title';

export default function CalloutSection({
    title = '',
    subtitle = '',
    buttonText = '',
    boxTitleText = ''
}) {
    return (
        <div className="callout-setion container-fluid bg-color-secondary">
            <div className="callout-section__container container _80">
                <div className="callout-section__left">
                    <div className="heading-3 mb-sm text-color-white">{title}</div>
                    <div className="heading-5 mb-xxl text-color-white">{subtitle}</div>
                    <Button text={buttonText} type="secondary--white"/>
                </div>
                <div className="callout-section__right">
                    <BoxTitle>{boxTitleText}</BoxTitle>
                </div>
            </div>
        </div>
    )
}
