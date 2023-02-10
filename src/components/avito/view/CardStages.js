/**
 * Imports : React
 */
import React from 'react';

export default function CardStage(props) {

    return (
        <section className={
            'w-full aspect-[2/1] relative'}>

            <span className={
                'align-text-top '
                + 'font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-sky-500 via-sky-400 to-sky-300 absolute '
                + 'laptop:text-[100px] laptop:leading-[100px] '
                + 'large:text-[100px] large:leading-[100px] '
                + 'desktop:text-[115px] desktop:leading-[115px] '}>
                {props.number}
            </span>


            <div className={
                'absolute left-[10%] top-[10%] right-0 bottom-0 flex flex-col justify-around '
                + 'opacity-80 card_primary '}>

                <h3 className={
                    'font-extrabold mb-6 text-neutral-900 '
                    + 'laptop:text-[20px] '
                    + 'large:text-[24px] '
                    + 'desktop:text-[28px] '
                    + 'dark:text-white'}>
                    {props.title}
                </h3>

                <p className={
                    'opacity-60 text-neutral-900 '
                    + 'dark:text-white'}>
                    {props.description}
                </p>

            </div>

        </section>
    )
}