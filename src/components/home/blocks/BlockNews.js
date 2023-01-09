/**
 * Imports : React
 */
import React from "react";
import CardNews from "../view/CardNews";

/**
 * Imports : media
 */
import {TbChristmasTree} from 'react-icons/tb';
import {GiUpgrade} from 'react-icons/gi';
import {FaTelegramPlane} from 'react-icons/fa';

import STUB_news from '../../assets/media/STUB_news.png';
import IcYoutube from "../../assets/media/icons/IcYoutube";
import { AiFillPlayCircle } from 'react-icons/ai';

export default function BlockNews() {

    return (
        <section className={
            'my-[145px]'
        }>

            <h2 className={
                'mb-[80px] section-title'}>
                Новости
            </h2>

            <div className={'flex flex-col '
                + 'laptop:flex-row laptop:space-x-[70px]'}>

                <div className={
                    'flex flex-col justify-between basis-1/2 space-y-[20px] mb-[40px] '
                    + 'card_primary cursor-pointer '
                    +'laptop:mb-0 '}>

                    <h4 className="flex justify-start items-center space-x-[10px]">
                        <IcYoutube />
                        <span className="text-[14px]">Видеоблог</span>
                    </h4>

                    <p className={'opacity-60'}>
                        Наш IT - видеоблог не содержит интеграций и рекламы, а несет исключительно образовательный и полезный материал для разработчиков и предпринимателей,
                        который расширит Ваш кругозор в сфере интернет технологий.
                    </p>

                    <div className="relative">
                        <img className='w-full' src={STUB_news} />


                        <AiFillPlayCircle className="w-[40px] h-[40px] z-20 absolute top-[45%] left-[45%] right-[45%] bottom-[45%]" />
                    </div>

                    <span className={'opacity-60'}>13.02.22</span>

                </div>

                <div className={'flex flex-col space-y-[15px] basis-1/2'}>

                    <CardNews
                        img={<GiUpgrade className="h-full w-full text-sky-500"/>}
                        title={'Обновление сайта its.dev'}
                        description={'Мы полностью обновили наш вебсайт в соответствии с трендами 2023 года.'} />

                    <CardNews
                        img={<FaTelegramPlane className="h-full w-full text-sky-500"/>}
                        title={'Telegram Web Apps'}
                        description={'Спектр наших услуг пополнился Telegram ботами на базе Telegram Web Apps. Предлагаем к просмотру демо-версии.'} />

                    <CardNews
                        img={<TbChristmasTree className="h-full w-full text-sky-500"/>}
                        title={'С Новым годом!'}
                        description={'Новогодние подарки уже ждут всех наших клиентов на электроной почте.'} />

                </div>

            </div>

        </section>
    )


}