import React from 'react';
import { RiApps2Fill } from 'react-icons/ri';
import CardWebAppsMobile from '../view/CardWebAppsMobile';
import SwiperWebApps from '../view/SwiperWebApps'

export default function BlockAdvantages(props) {


    return (
        <section className="mt-[265px]">

            <h2 className={'mb-12 '
                + 'text-[28px] leading-[32px] text-neutral-900 font-extrabold text-center  '
                + 'laptop:text-left laptop:text-[46px] laptop:leading-[52px] '
                + 'large:text-[58px] large:leading-[62px] '
                + 'desktop:text-[64px] desktop:leading-[72px] '
                + 'dark:text-white'}>
                Telegram <span className='text-sky-500'>Web Apps</span>
            </h2>

            <p className={
                'w-full mb-16 text-center '
                + 'text-[18px] leading-8 opacity-60 '
                + 'laptop:w-[722px] laptop:text-left'}>
                    Telegram боты с Web Apps - новое слово в маркетинге 2023 года, дающие гарантированный прирост повторных конверсий в кратчайший срок и с минимальным бюджетом.
                    Они способны полностью заменить мобильное приложение для малого и среднего бизнеса.
                    Данные боты превосходно работают на всех типах девайсов от смартфонов до Smart TV. 
                    У нас Вы можете заказать Телеграм бота с любым функционалом, от онлайн магазина и записи к Вашим специалистам до сложного уникального функционала.
                    Мы предоставляем решения под ключ, включающие весь цикл разработки от дизайна и прототипирования до развертывания на наших серверах и готовности к работе.  
                    Имея уже готовое решение всегда под рукой - клиент даже не будет думать о заказе у Ваших конкурентов.
            </p>

            <SwiperWebApps />

            <div className='laptop:hidden'>
                <div className="carousel p-4 space-x-[29px] bg-neutral rounded-box">
                    <div className="carousel-item">
                        <CardWebAppsMobile
                            icon={<RiApps2Fill className='w-full h-full' />}
                            title={<span><span className='text-sky-500'>60<Symbol symbol='+' /></span><br />проектов</span>}
                            description={"Предприниматели по всей России и ближнему зарубежью доверяют нам."}>
                        </CardWebAppsMobile>
                    </div>
                    <div className="carousel-item">
                        <CardWebAppsMobile
                            icon={<RiApps2Fill className='w-full h-full' />}
                            title={<span><span className='text-sky-500'>60<Symbol symbol='+' /></span><br />проектов</span>}
                            description={"Предприниматели по всей России и ближнему зарубежью доверяют нам."}>
                        </CardWebAppsMobile>
                    </div>
                    <div className="carousel-item">
                        <CardWebAppsMobile
                            icon={<RiApps2Fill className='w-full h-full' />}
                            title={<span><span className='text-sky-500'>60<Symbol symbol='+' /></span><br />проектов</span>}
                            description={"Предприниматели по всей России и ближнему зарубежью доверяют нам."}>
                        </CardWebAppsMobile>
                    </div>
                    <div className="carousel-item">
                        <CardWebAppsMobile
                            icon={<RiApps2Fill className='w-full h-full' />}
                            title={<span><span className='text-sky-500'>60<Symbol symbol='+' /></span><br />проектов</span>}
                            description={"Предприниматели по всей России и ближнему зарубежью доверяют нам."}>
                        </CardWebAppsMobile>
                    </div>

                </div>
            </div>

        </section>
    )
}

