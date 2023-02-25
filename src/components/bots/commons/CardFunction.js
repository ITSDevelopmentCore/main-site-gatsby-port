/**
 * Imports : React
 */
import React from 'react';

const CardFunction = (props) => 
        <section className={'space-y-[40px] '
            + 'card_primary'}>

            <div className={'flex justify-between items-center'}>

                <h4 className={
                    'font-extrabold text-[26px] '
                    + 'desktop:text-[30px]'}>
                    {props.title}
                </h4>

                <span className={
                    'w-[56px] h-[56px] '
                    + 'desktop:w-[64px] desktop:h-[64px] '
                    + 'text-sky-500'}>
                    {props.icon}
                </span>

            </div>

            <p className={'opacity-60'}>
                {props.description}
            </p>

        </section>

export default CardFunction;