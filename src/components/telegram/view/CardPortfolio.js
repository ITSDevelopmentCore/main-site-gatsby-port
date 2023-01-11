/**
 * Imports : React
 */
import React from 'react';

function CardPortfolio(props) {

    return (
        <section className={
            'p-[45px] mb-[100px] w-[90%] h-[600px] relative '
            + 'laptop:w-[750px] laptop:h-[720px] laptop:flex laptop:justify-between '
            + 'card_primary'}>



            <div className='laptop:hidden flex justify-center items-start'>
                <div className="mockup-phone border-primary h-[600px] aspect-[1/2] scale-[0.6] -mt-[120px]">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="bg-white w-full h-full">
                            <img
                                alt='Portrolio screenshot'
                                src={props.screenshot} />
                        </div>
                    </div>
                </div>
            </div>



            <div className={'flex flex-col absolute bottom-[30px] left-[30px] right-[30px] bg-white '
                + 'laptop:max-w-[300px] laptop:justify-between laptop:static '
                + 'dark:bg-card-surface'}>


                <h4 className={
                    'text-[26px] leading-[23px] mb-[7px] mt-[20px] '
                    + 'laptop:text-[35px] laptop:leading-[32px] laptop:my-0 '
                    + 'font-bold'
                }>
                    {props.title}
                </h4>

                <p className={
                    'text-justify text-[12px] leading-[16px] opacity-60 mb-[17px] '
                    + 'laptop:text-[16px] laptop:leading-[24px] laptop:mb-0 '
                }>
                    {props.description}
                </p>

                <div className='mb-[22px] laptop:mb-0'>
                    <h4 className={
                        'mb-[20px] '
                        + 'font-bold text-[16px] leading-[16px] '
                        + 'laptop:text-[24px] laptop:leading-[22px]'
                    }>
                        Бюджет проекта:
                    </h4>

                    <p className={
                        'text-[23px] leading-[20px] text-sky-500 font-extrabold '
                        + 'laptop:text-[32px] laptop:leading-[29px]'
                    }>
                        {props.budget}
                    </p>
                </div>

                <div className='mb-[22px] laptop:mb-0'>
                    <h4 className={
                        'mb-[20px] '
                        + 'font-bold text-[16px] leading-[16px] '
                        + 'laptop:text-[24px] laptop:leading-[22px]'
                    }>
                        Затрачено:
                    </h4>

                    <p className={
                        'text-[23px] leading-[20px] text-sky-500 font-extrabold '
                        + 'laptop:text-[32px] laptop:leading-[29px]'
                    }>
                        {props.result}
                    </p>
                </div>

                <a className='laptop:hidden'
                    href={props.link}>
                    <button className='btn w-full bg-sky-500 text-white'>
                        Посмотреть
                    </button>
                </a>
                <img
                    src={props.qr}
                    alt='QR code for portfolio work checkout'
                    className={
                        'hidden w-[140px] h-[140px] '
                        + 'rounded-[15px] '
                        + 'laptop:block '} />
            </div>

            <div className={
                'hidden '
                + 'laptop:flex laptop:justify-center laptop:items-center '}>
                <div className="mockup-phone border-primary h-[595px] aspect-[1/2] ">
                    <div className="camera"></div>
                    <div className="display">
                        <img
                            src={props.screenshot}
                            alt='Portrolio screenshot' />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CardPortfolio;