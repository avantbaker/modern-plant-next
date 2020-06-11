import React from 'react'
import SplitSection from '../split-section';
import BoxTitle from '../box-title';

export default function MethodsInfoSection() {
    return (
        <SplitSection
          className='methods-info container _80'
          contentLeft={
            <div className='methods-info__left'>
              <div className='content-block mb-xxl'>
                <div className='content-block__title heading-4 mb-lg'>Lorem Ipsum dolor sic amet</div>
                <p className='content-block__paragraph paragraph'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dignissimos quo
                  error sapiente magnam tempora ex sint modi aspernatur itaque deserunt doloribus
                  praesentium placeat corporis, odio tempore architecto! Eaque, ipsam! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Tempore omnis animi obcaecati illum
                  hic, alias eius necessitatibus totam eos blanditiis rerum! A aspernatur ipsa
                  excepturi nisi aut, quas corporis ipsum.
                </p>
              </div>
              <div className='content-block'>
                <div className='content-block__title heading-4 mb-lg'>Lorem Ipsum dolor sic amet</div>
                <p className='content-block__paragraph paragraph'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dignissimos quo
                  error sapiente magnam tempora ex sint modi aspernatur itaque deserunt doloribus
                  praesentium placeat corporis, odio tempore architecto! Eaque, ipsam! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Tempore omnis animi obcaecati illum
                  hic, alias eius necessitatibus totam eos blanditiis rerum! A aspernatur ipsa
                  excepturi nisi aut, quas corporis ipsum.
                </p>
              </div>
            </div>
          }
          contentRight={
            <div className='methods-info__right' style={{backgroundImage: `url(/images/global/fingerprint-grey.png?webp)`}}>
              <BoxTitle text='The power of plants' />
              <div className='methods-info__subtext heading-6--caps'>combined with</div>
              <BoxTitle text='The power of Dna' />
            </div>
          }
        />
    )
}
