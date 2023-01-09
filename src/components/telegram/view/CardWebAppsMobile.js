import React from 'react';

export default function CardWebAppsMobile() {

    return (
        <section className={
            'h-[520px] p-[30px] flex flex-col justify-end '
            + 'bg-white rounded-card '
            + 'dark:bg-card-surface dark:border dark:border-slate-800'}>

            <h4 className={
                'mb-[15px] '
                + 'text-[26px] leading-[23px] font-bold'}>Food-tech</h4>

            <p className={
                'mb-[11px] max-w-[236px] '
                + 'text-[16px]'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation.
            </p>

            <span className={'block -mt-[40px] text-sky-500 text-[70px] align-text-top'}>...</span>

            <button className={'btn bg-sky-500 text-white'}>Ознакомиться</button>

        </section>
    )
}