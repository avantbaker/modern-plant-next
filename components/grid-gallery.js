import React from 'react'

export default function GridGallery() {
    return (
        <div className="grid-gallery">
            <div className="grid-item" style={{ backgroundImage: `url(${require('../public/images/global/drinking.png?webp')})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${require('../public/images/global/boxlove.png?webp')})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${require('../public/images/global/greenbottle.png?webp')})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${require('../public/images/global/apothecary.png?webp')})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${require('../public/images/global/heartplant.png?webp')})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${require('../public/images/global/milk.png?webp')})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${require('../public/images/global/thegirls.png?webp')})` }}></div>
            <div className="grid-item" style={{ backgroundImage: `url(${require('../public/images/global/brownbottles.png?webp')})` }}></div>
        </div>
    )
}
