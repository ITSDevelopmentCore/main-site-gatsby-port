/**
 * Imports : React
 */
import React from 'react';

export default function CardAdvantageMobile(props) {

    return (
        <section className={'w-[290px] card_primary'}>

            <div className={
                'w-[108px] h-[108px] mb-[40px] '
                + 'text-sky-500'}>
                {props.icon}
            </div>

            <h4 className={'font-extrabold text-[33px] leading-[30px] mb-[22px]'}>
                {props.title}
            </h4>

            <p className={'opacity-60 max-w-[220px]'}>
                {props.description}
            </p>

        </section>
    )
}