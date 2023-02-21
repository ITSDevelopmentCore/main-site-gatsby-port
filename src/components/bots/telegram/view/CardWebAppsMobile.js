/**
 * Imports : React
 */
import React from 'react';

export default function CardWebAppsMobile(props) {

    return (
        <section className={
            'h-[520px] p-[30px] flex flex-col justify-end '
            + 'card_primary'}>

            <h4 className={
                'mb-[15px] '
                + 'text-[26px] leading-[23px] font-bold'}>
                {props.title}
            </h4>

            <p className={
                'mb-[11px] max-w-[236px] '
                + 'text-[16px]'}>
                {props.description}
            </p>

            <span className={'block -mt-[40px] text-sky-500 text-[70px] align-text-top'}>...</span>

            <a href={props.link} className={'btn bg-sky-500 text-white'}>Ознакомиться</a>

        </section>
    )
}