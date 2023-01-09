import React from 'react';

export default function CardAdvantageMobile(props) {

    return (
        <section className={
            'h-[370px] p-[27px] '
            + 'bg-white rounded-card '
            + 'dark:bg-card-surface dark:border dark:border-slate-800'}>

            <div className={
                'w-[108px] h-[108px] mb-[40px] '
                + 'text-sky-500'}>
                {props.icon}
            </div>

            <h4 className={
                'font-extrabold text-[33px] leading-[30px] mb-[22px] text-neutral-900 '
                + 'dark:text-white'}>
                {props.title}
            </h4>

            <p className={
                'opacity-60 text-neutral-900 max-w-[220px] text-[17px] leading-[22px] '
                + 'dark:text-white'}>
                {props.description}
            </p>

        </section>
    )
}