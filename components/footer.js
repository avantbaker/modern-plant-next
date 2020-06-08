import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import Input from './input';

export default function Footer({
    className = '',
    key = ''
}) {
    return (
        <div className={`footer ${className}`} key={key}>
            <div className="footer__section-wrapper footer__section-wrapper--top">
                <div className="footer__section footer__section--follow">
                    <div className="footer__title heading-6--caps mb-md">Follow us.</div>
                    <div className="footer__paragraph paragraph mb-md">Theres more where this came from</div>
                    <div className="footer__social">
                        <div className="footer__social--insta">
                            <FontAwesomeIcon className="footer__icon" icon={faTwitter} />
                        </div>
                        <div className="footer__social--twitter">
                            <FontAwesomeIcon className="footer__icon" icon={faInstagram} />
                        </div>
                        <div className="footer__social--facebook">
                            <FontAwesomeIcon className="footer__icon" icon={faFacebookF} />
                        </div>
                    </div>
                </div>
                <div className="footer__section footer__section--resources">
                    <div className="footer__title heading-6--caps mb-md">Resources</div>
                    <div className="footer__resources">
                        <a href="#" className="footer__link paragraph">My Account</a>
                        <a href="#" className="footer__link paragraph">Our Team</a>
                        <a href="#" className="footer__link paragraph">Support</a>
                        <a href="#" className="footer__link paragraph">News</a>
                    </div>
                </div>
                <div className="footer__section footer__section--newsletter">
                    <div className="footer__title heading-6--caps mb-md">Newsletter</div>
                    <div className="footer__newsletter-content">
                        <div className="paragraph">Good Content about the good stuff, stay tuned</div>
                        <div className="footer__form">
                            <Input 
                                className="footer__field-wrapper" 
                                inputClass="footer__input paragraph"
                                type="text" 
                                placeholder="Your Email" 
                            />
                            <a className="footer__link paragraph--small-underlined no-flex" href={'#'}>Read Article</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__section-wrapper footer__section-wrapper--bottom">
                <div className="footer__section footer__section--copyright">
                    <div className="footer__copyright-container">
                        <div className="footer__terms heading-6">Privacy | Terms</div>
                        <div className="footer__logo-wrapper">
                            {/* <div className="footer__logo">
                                <img className="footer__img footer__img--mark" src="global/mp-logo-mark-black.png" alt="Modern Plant Logo Mark"/>
                            </div> */}
                            <div className="footer__logo">
                                <img className="footer__img footer__img--type" src="global/mp-logo-type-black.png" alt="Modern Plant Logo Type"/>
                            </div>
                        </div>
                        <div className="footer__copyright paragraph">Copyright</div>
                    </div>
                </div>
                <div className="footer__section footer__section--notice">
                    <div className="footer__title heading-6--caps mb-md">FDA Notice</div>
                    <div className="footer__fda-notice paragraph--small">
                        Representations regarding the efficacy and safety of Feals have not 
                        been evaluated by the Food and Drug Administration. The FDA only evaluates 
                        foods and drugs, not supplements like this product. This product is not 
                        intended to diagnose, prevent, treat, or cure any disease. Click here, here, 
                        and here for research describing the benefits, performance, and efficacy of 
                        CBD based on the expertise of relevant professionals.
                    </div>
                </div>
            </div>
        </div>
    )
}
