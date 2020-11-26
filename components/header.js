import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUserCircle,
	faCartPlus,
	faBars,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Router from 'next/router';

export default function Header({ className = '', route }) {
	let logo = 'logo-horizontal-black';
	if (route === '/') {
		logo = 'mp-logo-lock-white';
	}

	const isLight = route === '/';
	return (
		<div id="header" className={`header ${className}`}>
			<div className="header__logo-wrapper">
				<Link href="/">
					<img
						src={`/images/global/${logo}.png`}
						alt="Logo Horizontal Black"
						className="header__logo header__logo--black"
					/>
				</Link>
				<Link href="/">
					<img
						src="/images/global/mp-logo-lock-white.png"
						alt="Logo Horizontal Black"
						className="header__logo header__logo--white"
					/>
				</Link>
			</div>
			<div className="header__navigation">
				<div className="header__links">
					<Link href="/remedies">
						<a className="header__link paragraph">Remedies</a>
					</Link>
					<Link href="/methods">
						<a className="header__link paragraph" href="#">
							Methods
						</a>
					</Link>
					<Link href="/subscriptions">
						<a className="header__link paragraph" href="#">
							Subscriptions
						</a>
					</Link>
					<Link href="/about">
						<a className="header__link paragraph" href="#">
							About
						</a>
					</Link>
					<Link href="/contact">
						<a className="header__link paragraph" href="#">
							Contact
						</a>
					</Link>
				</div>
				<div className="header__navigation--user">
					<Link href="/login">
						<FontAwesomeIcon className="header__icon" icon={faUserCircle} />
					</Link>
					<a href="https://themodernplant.com/cart">
						<FontAwesomeIcon className="header__icon" icon={faCartPlus} />
					</a>
				</div>
			</div>
			<div className={`header__navigation--mobile ${isLight ? 'light' : ''}`}>
				<Link href="/mobile-navigation">
					<FontAwesomeIcon
						className="header__icon header__navigation-open"
						icon={faBars}
					/>
				</Link>
				<FontAwesomeIcon
					onClick={() => Router.back()}
					className="header__icon header__navigation-close"
					icon={faTimes}
				/>
			</div>
		</div>
	);
}
