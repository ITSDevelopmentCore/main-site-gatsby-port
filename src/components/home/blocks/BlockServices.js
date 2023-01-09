/**
 * Imports : React
 */
import React from "react";
import CardService from "../view/CardService";

/**
 * Imports : Media
 */
import IllustrationServiceMobile from '../../assets/media/illustration_service-mobile.png';
import IllustrationServiceWeb from '../../assets/media/illustration_service-web.png';
import IllustrationServiceTelegram from '../../assets/media/illustration_service-telegram.png';
import IllustrationServiceMVP from '../../assets/media/illustration_service-mvp.png';


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

                <div className={
                    'flex flex-col laptop:flex-row laptop:justify-end laptop:space-x-[50px] laptop:space-y-0 space-y-[15px] '
                }>
                    <CardService
                        title={'Mobile разработка'}
                        description={'Разработка современных мобильных приложений для бизнеса в различных нишах. IOS Android Crossplatform PWA.'}
                        image={IllustrationServiceMobile} />

                    <CardService
                        title={'Web разработка'}
                        description={'Разработка SEO-оптимизированных сайтов и веб-приложений под ключ.'}
                        image={IllustrationServiceWeb} />
                </div>

                <div className={
                    'flex flex-col laptop:flex-row laptop:justyfy-start laptop:space-x-[50px] laptop:space-y-0 space-y-[15px] '
                }>
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