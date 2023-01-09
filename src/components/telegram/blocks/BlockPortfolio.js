import React from 'react';


import SwiperPortfolio from '../view/SwiperPortfolio'

export default function BlockPortfolio(props) {


    return (
        <section className={
            'mt-[110px] '
            + 'laptop:mt-[210px]'}>

            <h2 className={'mb-12 '
                + 'text-[28px] leading-[32px] font-extrabold text-center  '
                + 'laptop:text-left laptop:text-[46px] laptop:leading-[52px] '
                + 'large:text-[58px] large:leading-[62px] '
                + 'desktop:text-[64px] desktop:leading-[72px] '}>
                Портфолио
            </h2>

            <SwiperPortfolio />


        </section>
    )
}

