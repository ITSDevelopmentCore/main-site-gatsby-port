/**
 * Imports : React
 */
import React from "react";
import Symbol from '../../common/view/Symbol';

/**
 * Imports : Media
 */
import AvitoPrewCom from '../../../assets/avito/illustration_preview-light.webp';
import YandexPartner from '../../../assets/avito/Yandex_partner_btn.webp';


export default function BlockPreview() {

    const classesPreviewAdvantageDigitLaptop = "text-center desktop:text-[70px] desktop:leading-[75px] large:text-[60px] large:leading-[65px] laptop:text-[50px] laptop:leading-[55px]";
    const classesPreviewAdvantageTextLaptop = "font-base opacity-60 text-center";
    const classesPreviewAdvantageDividerLaptop = "h-[2px] w-full bg-neutral-900 opacity-10 my-10 dark:bg-white";
    const classesPreviewAdvantageDivider = "h-[2px] w-full bg-neutral-900 opacity-10 my-[20px] dark:bg-white";
    const classesPreviewAdvantageDigit = "basis-1/2 text-center text-[50px] leading-[50px]";
    const classesPreviewAdvantageText = "basis-1/2 text-[14px] font-base opacity-60";

    const buttonClickHandler = () => {
        document.getElementById('feedback').scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <section className={
            'mt-[100px] mb-[110px] '
            + 'laptop:mb-[220px]'
        }>
            <div className={
                'block '
                + 'laptop:flex laptop:items-center laptop:justify-between'}>

                <div className={'flex flex-col justify-center basis-1/2 mb-[240px] large:min-w-[670px]'}>

                    <h1 className={
                        'font-extrabold text-center text-white text-[35px] leading-[45px] mb-[44px] '
                        + 'laptop:text-[50px] laptop:leading-[55px] laptop:text-left '
                        + 'large:text-[75px] large:leading-[85px] '
                        + 'desktop:text-[95px] desktop:leading-[105px]'}>

                        Разработка<br />
                        <span className={'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500'}>ботов 
                        <span className="text-white ml-[15px]"> 
                        для
                        </span>
                        <span className="ml-[15px]">
                        Avito
                        </span>
                        </span>

                    </h1>

                    <p className="mb-[60px] text-white 
                        leading-[28px] text-center
                        laptop:text-left 
                        large:leading-[32px] 
                        desktop:leading-[34px]">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>
                    <span className="space-x-7 mb-[48px]">
                    <button
                        onClick={buttonClickHandler}
                        className={
                            'py-[19px] px-[46px] w-max mx-auto -mb-[80px] '
                            + 'leading-[30px] font-bold  bg-white border-[2px] border-white rounded-xl text-sky-500 hover:text-white hover:bg-transparent transition-all duration-200  '
                            + 'laptop:text-[19px] laptop:mx-0 laptop:mb-0 '
                            + 'large:py-[17px] large:px-[41px] '
                            + 'desktop:text-[22px] desktop:leading-[33px] '
                            + 'dark:to-sky-500'}>
                        Свяжитесь со мной
                    </button>
                  
                    
                    <button
                        onClick={buttonClickHandler}
                        className={
                            'py-[19px] px-[46px] w-max mx-auto -mb-[80px] '
                            + 'leading-[30px] font-bold bg-white border-[2px] border-white rounded-xl text-sky-500 hover:text-white hover:bg-transparent transition-all duration-200'
                            + 'laptop:text-[19px] laptop:mx-0 laptop:mb-0 '
                            + 'large:py-[17px] large:px-[41px] '
                            + 'desktop:text-[22px] desktop:leading-[33px] '
                            }>
                        Быстрый обзор 
                    </button>
                    </span>
                    <img
                            src={YandexPartner}
                            alt='Yandex Partner'
                            className={'h-full w-[310px]'} />
                </div>

             
                 
                        <img
                            src={AvitoPrewCom}
                            alt='Avito Working Bot'
                            className={'h-full w-[670px]'} />
              

             
            </div>

        </section>
    );

}