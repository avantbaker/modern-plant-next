import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCartPlus, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <div className="header">
            <div className="header__logo-wrapper">
                <img src="global/logo-horizontal-black.png" alt="Logo Horizontal Black" className="header__logo"/>
            </div>
            <div className="header__navigation">
                <div className="header__links">
                    <a className="header__link paragraph" href="#">Remedies</a>
                    <a className="header__link paragraph" href="#">Methods</a>
                    <a className="header__link paragraph" href="#">Subscription</a>
                    <a className="header__link paragraph" href="#">About</a>
                    <a className="header__link paragraph" href="#">Contact</a>
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
