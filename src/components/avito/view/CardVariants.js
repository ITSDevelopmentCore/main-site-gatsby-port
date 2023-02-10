/**
 * Imports : React
 */
import React from 'react';

function CardPortfolio(props) {

    const buttonClickHandler = () => {
        document.getElementById('feedback').scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <section className={
            ' mb-[30px] w-[40%] h-auto relative '
            + ' justify-between '
            + ''}>

            <img className='w-[20%]'
                alt='Иконка'
                src={props.icon} />

            <div className={'flex flex-col mt-[10px] bottom-[30px] left-[30px] right-[30px]'
                }>

                <h4 className={
                    'text-[26px] leading-[23px] mb-[7px] mt-[20px] '
                    + 'font-bold'}>
                    {props.title}
                </h4>

                <p className={
                    'text-justify text-[15px] leading-[21px] opacity-60 mb-[17px] '
                   }>
                    {props.description}
                </p>
              

            </div>

            <div className='mb-[22px] mt-[43px]  flex '>
            <div className='flex flex-col '>
                    <h4 className={
                        ' '
                        + 'font-bold text-[23px] leading-[21px]  '
                        }>
                        Цена:
                    </h4>

                    <p className={
                        'mt-[20px] text-[33px] leading-[30px] text-sky-500 font-extrabold '
                       }>
                        {props.price}
                    </p>
                </div>

               <div className='flex flex-col ml-[12%]'>
                    <h4 className={
                        ' '
                        + 'font-bold text-[23px] leading-[21px] '
                        }>
                        Сроки:
                    </h4>

                    <p className={
                        'mt-[20px] text-[33px] leading-[30px] text-sky-500 font-extrabold '
                      }>
                        {props.timing}
                    </p>

                    </div>
                </div>
                <button
                        onClick={buttonClickHandler}
                        className={
                            'py-[19px] px-[46px] w-full mx-auto -mb-[80px] '
                            + 'leading-[30px] font-bold    border-[2px] border-sky-500 rounded-xl text-white bg-gradient-to-t from-sky-500 to-sky-300 hover:text-sky-500  hover:bg-none transition-all duration-200  '
                            }>
                        Уточнить стоимость
                    </button>


        </section>
    )
}

export default CardPortfolio;