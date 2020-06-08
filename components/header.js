import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCartPlus, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header({
    className = ''
}) {
    return (
        <div id="header" className={`header ${className}`}>
            <div className="header__logo-wrapper">
                <Link href="/">
                    <img src="/global/logo-horizontal-black.png" alt="Logo Horizontal Black" className="header__logo"/>
                </Link>
            </div>
            <div className="header__navigation">
                <div className="header__links">
                    <Link href="/remedies">
                        <a className="header__link paragraph">Remedies</a>
                    </Link>
                    <Link href="/methods">
                        <a className="header__link paragraph" href="#">Methods</a>
                    </Link>
                    <Link href="/subscription">
                        <a className="header__link paragraph" href="#">Subscription</a>
                    </Link>
                    <Link href="/about">
                        <a className="header__link paragraph" href="#">About</a>
                    </Link>
                    <Link href="/contact">
                        <a className="header__link paragraph" href="#">Contact</a>
                    </Link>
                </div>
                <div className="header__navigation--user">
                    <FontAwesomeIcon className="header__icon" icon={faUserCircle} />
                    <FontAwesomeIcon className="header__icon" icon={faCartPlus} />
                </div>
            </div>
            <div className="header__navigation--mobile">
                <FontAwesomeIcon className="header__icon" icon={faBars} />
            </div>
        </div>
    )
}
