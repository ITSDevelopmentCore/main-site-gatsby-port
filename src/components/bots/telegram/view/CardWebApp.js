/**
 * Imports : React
 */
import React from 'react';

export default function CardWebApp(props) {

    return (
        <section className={
            'mb-[100px] w-[850px] h-[610px] flex justify-between '
            + 'card_primary'}>

            <div className='basis-[380px] flex flex-col justify-between'>
                <h3 className='font-bold text-[35px] leading-[32px] mb-10'>
                    {props.title}
                </h3>

                <article className='text-justify text-sm leading-6 opacity-60 mb-20'>
                    {props.description}
                </article>

                <div className='flex justify-between'>
                    <img
                        src={props.qr}
                        alt='Telegram Web App QR code for checkout'
                        className='w-[150px] aspect-square' />
                    <p className='text-xs opacity-60 w-36'>Сканируйте QR-код или
                        <a href={props.link} className='underline text-sky-500 cursor-pointer font-bold'>перейтите по ссылке</a>, чтобы ознакомиться с тестовым приложением</p>
                </div>

            </div>

            <div className='flex justify-center items-center'>
                <div className="mockup-phone border-primary h-full aspect-[1/2]">
                    <div className="camera"></div>
                    <div className="display">
                        <img
                            src={props.image}
                            alt='Telegram Web App Screenshot'/>
                    </div>
                </div>
            </div>

        </section>
    )
}