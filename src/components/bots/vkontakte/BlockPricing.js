/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports : components
 */
import Swiper from '../commons/SwiperPrices'


export default function BlockPricing() {

    return (
        <section className={'mt-[110px] '
        + 'laptop:mt-[265px]'}>

            <h2 className={'mb-12 section-title'}>
                Стоимость работы 
            </h2>

            <Swiper />

        </section>
    )
}

