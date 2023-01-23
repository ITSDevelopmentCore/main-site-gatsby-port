/**
 * Imports : React
 */
import React from "react";
import CardService from "../view/CardService";

/**
 * Imports : Media
 */
import IllustrationServiceMobile from '../../../assets/home/illustration_service-mobile.webp';
import IllustrationServiceWeb from '../../../assets/home/illustration_service-web.webp';
import IllustrationServiceTelegram from '../../../assets/home/illustration_service-telegram.webp';
import IllustrationServiceMVP from '../../../assets/home/illustration_service-mvp.webp';


export default function BlockServices() {

    return (
        <section className={
            'mt-[145px] '
        }>

            <h2 className={
                'mb-[10px] section-title '
                + 'laptop:mb-[20px]'}>
                Услуги
            </h2>

            <p className={
                'mb-[50px] '
                + 'text-center opacity-60 '
                + 'laptop:text-left laptop:w-[600px] '}>
                Все услуги по разработке программного обеспечения предоставляются по официальному договору.
            </p>

            <div className={
                'flex flex-col space-y-[15px] '
        +'laptop:space-y-[40px]'}>

                <div className={'flex flex-col laptop:flex-row laptop:justify-end laptop:space-x-[50px] laptop:space-y-0 space-y-[15px]'}>
                    <CardService
                        title={'Mobile разработка'}
                        description={'Разработка современных мобильных приложений для бизнеса в различных нишах и все платформы.'}
                        image={IllustrationServiceMobile} />

                    <CardService
                        title={'Web разработка'}
                        description={'Разработка SEO-оптимизированных продающих сайтов и веб-приложений под ключ.'}
                        image={IllustrationServiceWeb} />
                </div>

                <div className={'flex flex-col laptop:flex-row laptop:justyfy-start laptop:space-x-[50px] laptop:space-y-0 space-y-[15px]'}>
                    <CardService
                        title={'Telegram разработка'}
                        description={'Разработка современных Telegram ботов под ключ с интеграцией Telegram Web Apps.'}
                        image={IllustrationServiceTelegram} />

                    <CardService
                        title={'Startup MVP'}
                        description={'Быстрая и бюджетная разработка MVP для стартапов, быстрого выхода на рынок, тестирования идеи.'}
                        image={IllustrationServiceMVP} />
                </div>

            </div>

        </section>
    )


}