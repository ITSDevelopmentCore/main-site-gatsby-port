/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports : media
 */
import { FiArrowDownRight } from 'react-icons/fi';

/**
 * Imports : components
 */
import { Link } from 'gatsby';


export default function CardService(props) {

    return (
        <Link
            to={props.link}
            className={
                'relative '
                + 'overflow-hidden card_primary text-[14px] cursor-pointer hover:scale-105 transition-all duration-200 '
                + 'laptop:min-w-[430px] laptop:text-[18px] '
                + 'large:w-[480px] '
                + 'desktop:w-[540px] '}>

            <h4 className={
                'text-[24px] leading-[26px] font-extrabold mb-[25px] '
                + 'laptop:text-[32px] laptop:leading-[36px] '
                + 'large:text-[36px] large:leading-[40px] '
                + 'desktop:text-[40px] desktop:leading-[44px] '}>
                <span className='text-sky-500 '>{props.title.split(' ')[0]}</span>
                <br />
                <span className=''>{props.title.split(' ')[1]}</span>
            </h4>

            <p className={'opacity-60 w-[80%]'}>
                {props.description}
            </p>

            <img
                src={props.image}
                alt='Service card illustration'
                className={'absolute top-0 right-0'} />

            <FiArrowDownRight className="absolute bottom-[20px] right-[20px] w-[24px] h-[24px] block" />

        </Link>
    )
}