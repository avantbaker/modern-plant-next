import React from 'react'
const drinking = require('../public/images/global/drinking.png?webp');
const boxlove = require('../public/images/global/boxlove.png?webp');
const greenbottle = require('../public/images/global/greenbottle.png?webp');
const apothecary = require('../public/images/global/apothecary.png?webp');
const heartplant = require('../public/images/global/heartplant.png?webp');
const milk = require('../public/images/global/milk.png?webp');
const thegirls = require('../public/images/global/thegirls.png?webp');
const brownbottles = require('../public/images/global/brownbottles.png?webp');

export default function GridGallery() {
    return (
        <div className="grid-gallery">
            <div className="grid-item" style={{ backgroundImage: `url(${drinking})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${boxlove})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${greenbottle})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${apothecary})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${heartplant})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${milk})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${thegirls})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${brownbottles})` }}></div>
        </div>
    )
}
