/**
 * Imports : React
 */
import React from 'react';

const CardBonus = (props) =>
    <div className={
        'relative '
        + 'card_primary '
        + 'laptop:basis-0 laptop:grow'}>

        <div className={'absolute w-[130px] h-[130px] top-[30px] right-[30px] ' 
        + 'opacity-20 text-sky-500 '
        + 'laptop:opacity-100 laptop:w-[65px] laptop:h-[65px]'}>
            {props.icon}
        </div>

        <h4 className='font-extrabold text-[28px] mb-6'>
            {props.title}
        </h4>

        <p className='text-justify opacity-60'>
            {props.description}
        </p>

    </div>

export default CardBonus;