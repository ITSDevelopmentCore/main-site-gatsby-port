/**
 * Imports : React
 */
import React from 'react';

export default function CardWebAppsMobile(props) {

    return (
        <section className="collapse collapse-arrow card_primary p-[20px] rounded-[35px]">

            <div className={'flex justify-start items-center'}>
                <span className={
                    ' '
                    + 'text-[44px] leading-[48px] font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-sky-500 via-sky-400 to-sky-300 '}>
                    {props.number}
                </span>

                <div className="collapse-title text-[19px]">
                    {props.title}
                </div>
            </div>

            <div className="collapse-content">
                <p className={'mx-auto text-[14px] leading-[20px] opacity-60'}>{props.description}</p>
            </div>

        </section>

    )
}