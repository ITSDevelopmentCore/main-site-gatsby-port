/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports : components
 */
import SwiperVariants from '../view/SwiperVariants'


export default function BlockPortfolio() {


    return (
        <section className={
            'mt-[110px] '
            }>

            <h2 className={'mb-12 section-title'}>
                Стоимость работы 
            </h2>

            <SwiperVariants />

        </section>
    )
}

