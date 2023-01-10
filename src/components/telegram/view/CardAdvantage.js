/**
 * Imports : React
 */
import React from 'react';

export default function CardAdvantage(props) {

    return (
        <section className={
            'w-full h-[260px] relative px-[40px] pt-[40px] pb-[20px] '
            + 'card_primary'}>

            <div className={'flex justify-between'}>

                <h4 className={
                    'font-extrabold text-[35px] leading-[32px] mb-6 '
                    + 'laptop:text-[24px] leading-[21px] '
                    + 'large:text-[32px] leading-[29px] '
                    + 'desktop:text-[35px] leading-[32px] '}>
                    {props.title}
                </h4>

                <span className={
                    'w-14 h-14 '
                    + 'laptop:absolute laptop:top-[40px] laptop:right-[40px] laptop:w-[80px] laptop:h-[80px] laptop:opacity-20 '
                    + 'large:w-[55px] large:h-[55px] large:static large:opacity-100 '
                    + 'desktop:w-[65px] desktop:h-[65px] '
                    + 'text-sky-500'}>
                    {props.icon}
                </span>

            </div>

            <p className={
                'opacity-60 '
                + 'laptop:text-[14px] '
                + 'large:text-[16px] '
                + 'desktop:text-[18px] '}>
                {props.description}
            </p>

        </section>
    )
}