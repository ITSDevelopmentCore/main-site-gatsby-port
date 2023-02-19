/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports : media
 */
import { FaRobot } from 'react-icons/fa';

function CardPrice(props) {

    const buttonClickHandler = () => {
        document.getElementById('feedback').scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <section className='w-[350px] group'>

            <div className={'flex flex-col mt-[10px] bottom-[30px] left-[30px] right-[30px]'}>

                <FaRobot className={'w-[82px] h-[82px] '
                    + 'text-white group-hover:text-sky-500 transition-all duration-200'}/>

                <h4 className={'text-[26px] font-bold'}>
                    {props.title}
                </h4>

                <p className={'text-justify text-[15px] leading-[21px] opacity-60 mb-[17px]'}>
                    {props.description}
                </p>

            </div>

            <div className='mb-[22px] mt-[43px] flex'>

                <div className='flex flex-col'>

                    <h4 className={'font-bold text-[23px] leading-[21px]'}>
                        Цена:
                    </h4>

                    <p className={'mt-[20px] text-[33px] leading-[30px] text-sky-500 font-extrabold'}>
                        {props.price}
                    </p>
                </div>

                <div className='flex flex-col'>
                    <h4 className={'font-bold text-[23px] leading-[21px]'}>
                        Сроки:
                    </h4>

                    <p className={'mt-[20px] text-[33px] leading-[30px] text-sky-500 font-extrabold'}>
                        {props.timing}
                    </p>

                </div>
            </div>

            <button
                onClick={buttonClickHandler}
                className={'button w-full '
                    + 'rounded-xl text-white bg-gradient-to-t from-sky-500 to-sky-300 border-2 group-hover:border-sky-500 group-hover:text-sky-500 group-hover:bg-none transition-all duration-200'
                }>
                Уточнить стоимость
            </button>

        </section>
    )
}

export default CardPrice;