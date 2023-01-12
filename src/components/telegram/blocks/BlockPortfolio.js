/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports : components
 */
import SwiperPortfolio from '../view/SwiperPortfolio'


export default function BlockPortfolio() {


    return (
        <section className={
            'mt-[110px] '
            + 'laptop:mt-[210px]'}>

            <h2 className={'mb-12 section-title'}>
                Портфолио
            </h2>

            <SwiperPortfolio />

        </section>
    )
}

