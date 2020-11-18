import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Input from './input';
import Link from 'next/link';

export default function Footer({ className = '', key = '' }) {
	return (
		<div className={`footer ${className}`} key={key}>
			<div className="footer__section-wrapper footer__section-wrapper--top">
				<div className="footer__section footer__section--follow">
					<div className="footer__title heading-6--caps mb-md">Follow us.</div>
					<div className="footer__paragraph paragraph mb-md">
						Theres more where this came from
					</div>
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
						<Link href="/account">
							<div className="footer__link paragraph">My Account</div>
						</Link>
						<Link href="/about">
							<div className="footer__link paragraph">Our Team</div>
						</Link>
						<Link href="/support">
							<div className="footer__link paragraph">Support</div>
						</Link>
						<Link href="/news">
							<div className="footer__link paragraph">News</div>
						</Link>
					</div>
				</div>
				<div className="footer__section footer__section--newsletter">
					<div className="footer__title heading-6--caps mb-md">Newsletter</div>
					<div className="footer__newsletter-content">
						<div className="paragraph">
							Subscribe to our newsletter &amp; stay up to date on all things Modern
							Plant.
						</div>
						<div className="footer__form">
							<Input
								className="footer__field-wrapper"
								inputClass="footer__input paragraph"
								type="text"
								placeholder="Your Email"
							/>
							<a className="footer__link paragraph--small-underlined no-flex" href={'#'}>
								Subscribe
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__section-wrapper footer__section-wrapper--bottom">
				<div className="footer__section footer__section--copyright">
					<div className="footer__copyright-container">
						<Link href="/terms">
							<div className="footer__terms heading-6">Privacy | Terms</div>
						</Link>
						<div className="footer__logo-wrapper">
							<div className="footer__logo">
								<img
									className="footer__img footer__img--type"
									src="/images/global/mp-logo-type-black.png"
									alt="Modern Plant Logo Type"
								/>
							</div>
						</div>
						<div className="footer__copyright paragraph">Copyright</div>
					</div>
				</div>
				<div className="footer__section footer__section--notice">
					<div className="footer__title heading-6--caps mb-md">FDA Notice</div>
					<div className="footer__fda-notice paragraph--small">
						These statements have not been evaluated by the Food and Drug Administration.
						This product is not intended to diagnose, treat, cure, or prevent any disease.
						As with any dietary supplement, you should advise your healthcare practitioner
						of the use of this product.
					</div>
				</div>
			</div>
		</div>
	);
}
