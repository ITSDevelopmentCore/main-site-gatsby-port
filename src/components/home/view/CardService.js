/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports : media
 */
import { FiArrowDownRight } from 'react-icons/fi';


export default function CardService(props) {

    return (
        <section className={
            'h-[220px] relative flex flex-col justify-between overflow-hidden card_primary '
            +'laptop:h-[290] laptop:w-[430] '
            +'large:h-[325px] large:w-[480px] '
            +'desktop:h-[367px] desktop:w-[540px] '
            }>

            <h4 className={
                'text-[24px] leading-[26px] font-extrabold '
                +'laptop:text-[32px] laptop:leading-[36px] '
                +'large:text-[36px] large:leading-[40px] '
                +'desktop:text-[40px] desktop:leading-[44px] '}>
                <span className='text-sky-500'>{props.title.split(' ')[0]}</span>
                <br />
                <span>{props.title.split(' ')[1]}</span>
            </h4>

            <p className={
                'opacity-60 w-2/3 '
                }>
                {props.description}
            </p>

            <img
                className={'absolute top-0 right-0'}
                src={props.image} />


            <FiArrowDownRight className="absolute bottom-[20px] right-[20px] w-[24px] h-[24px] block" />

        </section>
    )
}