import React from 'react'
import BigCard from '../big-card';
const science = require('../../public/images/home/science.png?webp');
const aesterbay = require('../../public/images/home/aesterbay.png?webp');

export default function DualCardsContainer() {
    return (
        <section className="dual-cards container _80 p-0">
          <div className="row">
              <div className="dual-cards__card col-xs-12 col-md-6">
                <BigCard 
                    subtitle={'Learn About Our Methods'}
                    title={'Modern Methods'}
                    src={science}
                    linkText={'Process'}
                />
              </div>
              <div className="dual-cards__card col-xs-12 col-md-6">
                <BigCard 
                    subtitle={'Browse our terpene suplements'}
                    title={'Refined Remedies'}
                    src={aesterbay}
                    linkText={'Producs'}
                />
              </div>
          </div>
        </section>
    )
}
