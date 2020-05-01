import React from 'react'
import BigCard from '../big-card';

export default function DualCardsContainer() {
    return (
        <section className="dual-cards container-fluid p-0">
          <div className="row">
              <div className="dual-cards__card col-xs-12 col-md-6">
                <BigCard 
                    subtitle={'Learn About Our Methods'}
                    title={'Modern Methods'}
                    src={'home/science.png'}
                    linkText={'Process'}
                />
              </div>
              <div className="dual-cards__card col-xs-12 col-md-6">
                <BigCard 
                    subtitle={'Browse our terpene suplements'}
                    title={'Refined Remedies'}
                    src={'home/aesterbay.png'}
                    linkText={'Producs'}
                />
              </div>
          </div>
        </section>
    )
}
