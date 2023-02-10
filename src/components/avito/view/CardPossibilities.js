/**
 * Imports : React
 */
import React from 'react';
import { readMore } from '../../../scripts/changeViewByIdScripts';

export default function CardStage(props) {

    return (
        <section className={
            'w-full aspect-[2/1] relative'}>






            <div className={
                'absolute left-[10%] top-[10%] right-0 bottom-[-10%] justify-around '
                + ' card_primary '}>
                   
                    
                       
<span className='absolute flex-col w-[60%] top-[20%]'>
                <h3 className={
                    'font-extrabold mb-6 text-neutral-900 '
                    + 'desktop:text-[28px] '
                    + 'dark:text-white'}>
                    {props.title}
                </h3>

                <p className={
                    'opacity-60 text-neutral-900 '
                    + 'dark:text-white'}>
                    {props.description}
                    <button id='dots' onClick={readMore} >...</button>
                    <span id='more' className='hidden'>{props.more}</span>
                </p>
                </span>
                <img
          src={props.icon}
          alt='Иконка'
          className={ 'w-[15%] ml-[90%]'
          + ' bg-clip-text bg-gradient-to-t from-sky-500 via-sky-400 to-sky-300 '
          }
        />
            </div>

        </section>
    )
}