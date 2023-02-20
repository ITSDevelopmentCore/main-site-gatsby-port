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
        <section className={'w-[250px] group flex h-full flex-col justify-between '
            + 'laptop:w-[350px]'}>

            <div className={'flex flex-col space-y-[10px]'}>

                <FaRobot className={'w-[80px] h-[80px] '
                    + 'text-white group-hover:text-sky-500 transition-all duration-200'} />

                <h4 className={'text-[20px] font-bold '
                    + 'laptop:text-[24px]'}>
                    {props.title}
                </h4>

                <p className={'text-justify opacity-60'}>
                    {props.description}
                </p>

            </div>


            <div>

                <div className='mb-[20px] mt-[40px] flex justify-between'>

                    <div>

                        <span className={'font-bold text-[18px] leading-[20px] '
                            + 'laptop:text-[24px]'}>
                            Цена:
                        </span>

                        <p className={'mt-[20px] text-[18px] leading-[20px] text-sky-500 '
                            + 'laptop:text-[24px]'}>
                            <span className={'font-extrabold'}>{props.price} Р</span>
                        </p>

                    </div>

                    <div>
                        <span className={'font-bold text-[18px] leading-[20px] '
                            + 'laptop:text-[24px]'}>
                            Сроки:
                        </span>

                        <p className={'mt-[20px] text-[18px] leading-[20px] text-sky-500 font-extrabold '
                            + 'laptop:text-[24px]'}>
                            {props.timing}
                        </p>
                    </div>
                </div>

                <button
                    onClick={buttonClickHandler}
                    className={'w-full button rounded-xl text-white bg-gradient-to-t from-sky-500 to-sky-300 border-2 group-hover:border-sky-500 group-hover:text-sky-500 group-hover:bg-none transition-all duration-200 '
                        + 'dark:border-sky-500 dark:to-sky-500 '}>
                    Уточнить стоимость
                </button>
            </div>


        </section>
    )
}

export default CardPrice;