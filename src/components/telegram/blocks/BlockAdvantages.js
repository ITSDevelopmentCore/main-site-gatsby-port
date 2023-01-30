/**
 * Imports : React
 */
import React, { useContext } from 'react';
import { ThemeContext } from '../../../layouts/index';

/**
 * Imports: media
 */
import { RiApps2Fill } from 'react-icons/ri';
import { BsGem } from 'react-icons/bs';
import { SiMusicbrainz } from 'react-icons/si';
import { RiServiceFill } from 'react-icons/ri';

/**
 * Imports: components
 */
import Symbol from '../../common/view/Symbol';
import CardAdvantageMobile from '../view/CardAdvantageMobile';
import CardAdvantage from '../view/CardAdvantage';
import AwardLight from '../../../assets/telegram/award_light.svg';
import AwardDark from '../../../assets/telegram/award_dark.svg';



export default function BlockAdvantages() {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className="mt-[85px]">

                <h2 className={'mb-12 section-title'}>
                    Преимущества
                </h2>

                <div className='hidden laptop:flex justify-between'>

                    <div className='basis-[60%] grid grid-cols-2 gap-11 mr-24 '>

                        <CardAdvantage
                            icon={<RiApps2Fill className='w-full h-full' />}
                            title={<span><span className='text-sky-500'>20<Symbol symbol='+' /></span><br />проектов</span>}
                            description={"Максимальные оценки качества работы на Российских площадках по поиску подрядчиков"}>
                        </CardAdvantage>

                        <CardAdvantage
                            icon={<BsGem className='w-full h-full' />}
                            title={"Чистый процесс"}
                            description={"Мы работаем по официальному договору, предоставляя ежедневную отчетность о ходе работы."}>
                        </CardAdvantage>

                        <CardAdvantage
                            icon={<SiMusicbrainz className='w-full h-full' />}
                            title={"Быстро и просто"}
                            description={"Телеграм бот способен быстро закрыть потребность в мобильном приложении, или автоматизировать бизнес процесс."}>
                        </CardAdvantage>

                        <CardAdvantage
                            icon={<RiServiceFill className='w-full h-full' />}
                            title={"Работа под ключ"}
                            description={"Мы проводим полный цикл разработки для каждого проекта. От дизайна и до внедрения в работу."}>
                        </CardAdvantage>

                    </div>

                    <div className={"grow flex justify-center relative"}>

                        <img
                            src={theme === 'dark' ? AwardDark : AwardLight}
                            alt='Our company rewards'
                            className={'absolute h-full'} />

                        <p className='flex flex-col items-center w-[40%] text-center desktop:pt-[10%] laptop:scale-75 laptop:pt-[30%] desktop:scale-100'>
                            <span className='font-extrabold text-[100px] leading-[50px] text-sky-500'>4</span><br />
                            <span className='font-bold text-[30px] leading-[30px] text-sky-500'>место</span><br />
                            <span className='font-light opacity-80'>в премии рунета «Digital Агентства»</span>
                        </p>
                    </div>

                </div>
            </div>

            <div className='laptop:hidden'>
                <div className="carousel p-4 space-x-4 bg-neutral rounded-box">
                    <div className="carousel-item">
                        <CardAdvantageMobile
                            icon={<RiApps2Fill className='w-full h-full' />}
                            title={<span><span className='text-sky-500'>20<Symbol symbol='+' /></span><br />проектов</span>}
                            description={"Максимальные оценки качества работы на Российских площадках по поиску подрядчиков"}>
                        </CardAdvantageMobile>
                    </div>
                    <div className="carousel-item">
                        <CardAdvantageMobile
                            icon={<BsGem className='w-full h-full' />}
                            title={"Чистый процесс"}
                            description={"По всем услугам мы работаем исключительно по договору об оказании услуг, предоставляя регулярную отчетность."}>
                        </CardAdvantageMobile>
                    </div>
                    <div className="carousel-item">
                        <CardAdvantageMobile
                            icon={<SiMusicbrainz className='w-full h-full' />}
                            title={"Быстро и просто"}
                            description={"Телеграм бот способен быстро закрыть потребность в мобильном приложении, или автоматизировать бизнес процесс."}>
                        </CardAdvantageMobile>
                    </div>
                    <div className="carousel-item">
                        <CardAdvantageMobile
                            icon={<RiServiceFill className='w-full h-full' />}
                            title={"Работа под ключ"}
                            description={"Мы проводим полный цикл разработки для каждого проекта. От дизайна и до внедрения в работу."}>
                        </CardAdvantageMobile>
                    </div>

                </div>
            </div>
        </>
    )
}

