import React from 'react'

export default function GridGallery() {
    return (
        <div className="grid-gallery">
            <div className="grid-item" style={{ backgroundImage: `url(${require('../public/images/global/drinking.png')})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${require('../public/images/global/boxlove.png')})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${require('../public/images/global/greenbottle.png')})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${require('../public/images/global/apothecary.png')})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${require('../public/images/global/heartplant.png')})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${require('../public/images/global/milk.png')})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${require('../public/images/global/thegirls.png')})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${require('../public/images/global/brownbottles.png')})` }}></div>
        </div>
    )
}
