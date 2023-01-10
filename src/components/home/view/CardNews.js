/**
 * Imports : React
 */
import React from 'react';

export default function CardAdvantage(props) {

    return (
        <section className={
            'flex flex-col card_primary p-[30px] '
            + 'laptop:h-[220px] laptop:flex-row '}>

            <div
                className={
                    'w-1/2 mb-[24px] '
                    + 'laptop:h-full laptop:aspect-video laptop:mr-[30px]'}>
                {props.img}
            </div>

            <div className={'flex flex-col justify-around'}>

                <h4 className={
                    'mb-[12px] text-[16px] font-bold '
                }>
                    {props.title}
                </h4>

                <p className={
                    'w-full '
                    + 'opacity-60 '
                    + 'laptop:text-left '}>
                    {props.description}
                </p>

            </div>


        </section>
    )
}