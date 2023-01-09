/**
 * Imports : React
 */
import React from "react";
import Symbol from '../../common/view/Symbol';

/**
 * Imports : Media
 */
import IllustrationMobileMockupDouble from '../../../assets/telegram/illustration-mobile-mockup-double.png';
import MockupGIF from '../../../assets/telegram/video/mockup.gif';

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

                <div className={'flex flex-col justify-center basis-1/2 large:min-w-[670px]'}>

                    <h1 className={
                        'font-extrabold text-center text-[35px] leading-[45px] mb-[45px] '
                        + 'laptop:text-[50px] laptop:leading-[55px] laptop:text-left '
                        + 'large:text-[75px] large:leading-[85px] '
                        + 'desktop:text-[95px] desktop:leading-[105px]'}>

                        Разработка<br />
                        <span className={'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500'}>Telegram-ботов</span>

                    </h1>

                    <p className={'mb-[45px] '
                        + 'leading-[28px] text-center '
                        + 'laptop:text-left '
                        + 'large:leading-[32px] '
                        + 'desktop:leading-[34px]'}>
                        Телеграм боты в 2023 году - самое эффективное средство автоматизации и цифрового маркетинга с небольшим бюджетом.
                        Мы реализуем уникальных ботов с веб интерфейсами, гарантирующих перевыполнение ожиданий заказчика и легкую интеграцию в ваш бизнес.
                    </p>

                    <button
                        onClick={buttonClickHandler}
                        className={
                            'py-[19px] px-[46px] w-max mx-auto -mb-[80px] '
                            + 'leading-[30px] font-bold text-white shadow-blue rounded-xl bg-gradient-to-t from-sky-500 to-sky-300 transition-all duration-200 hover:shadow-blue-extended '
                            + 'laptop:text-[19px] laptop:mx-0 laptop:mb-0 '
                            + 'large:py-[17px] large:px-[41px] '
                            + 'desktop:text-[22px] desktop:leading-[33px] '
                            + 'dark:to-sky-500'}>
                        Свяжитесь со мной
                    </button>

                </div>

                <div className={'hidden aspect-[1/2] '
                    + 'mockup-phone border-primary '
                    + 'laptop:block laptop:w-[250px] '
                    + 'large:w-[300px] '
                    + 'desktop:w-[330px] '}>
                    <div className="camera"></div>
                    <div className="display h-full rounded-[20px] ">
                        <img src={MockupGIF} className={'h-full w-full'} />
                    </div>
                </div>

                <img
                    src={IllustrationMobileMockupDouble}
                    className={
                        'h-[350px] w-[270px] m-auto relative -bottom-[150px] z-20 '
                        + 'laptop:hidden '} />

                <div className={
                    'py-[50px] px-[22px] space-y-[2em] hidden flex-col laptop:flex '
                    + 'bg-white rounded-[50px] border '
                    + 'laptop:w-[175px] '
                    + 'large:w-[185px] '
                    + 'desktop:w-[195px] '
                    + 'dark:bg-[#1A232C] dark:border-slate-800'}>

                    <div className="flex flex-col">
                        <div className={classesPreviewAdvantageDigitLaptop}>25<Symbol symbol='%' /></div>
                        <p className={classesPreviewAdvantageTextLaptop}>Увеличение<br /> конверсионности</p>
                    </div>

                    <div className={classesPreviewAdvantageDividerLaptop} />

                    <div className="flex flex-col">
                        <div className={classesPreviewAdvantageDigitLaptop}>50</div>
                        <p className={classesPreviewAdvantageTextLaptop}>Готовых<br /> проектов</p>
                    </div>

                    <div className={classesPreviewAdvantageDividerLaptop} />

                    <div className="flex flex-col">
                        <div className={classesPreviewAdvantageDigitLaptop}>20т</div>
                        <p className={classesPreviewAdvantageTextLaptop}>Минимальный<br /> бюджет</p>
                    </div>

                </div>


            </div>

            <div className={
                'flex flex-col p-[26px] relative z-40 '
                + 'card_primary ' 
                + 'laptop:hidden '}>


                <div className="flex justify-between items-center">
                    <div className={classesPreviewAdvantageDigit}>25<Symbol symbol='%' /></div>
                    <p className={classesPreviewAdvantageText}>Увеличение<br /> конверсионности</p>
                </div>

                <div className={classesPreviewAdvantageDivider} />

                <div className="flex justify-between items-center">
                    <div className={classesPreviewAdvantageDigit}>50</div>
                    <p className={classesPreviewAdvantageText}>Готовых<br /> проектов</p>
                </div>

                <div className={classesPreviewAdvantageDivider} />

                <div className="flex justify-between items-center">
                    <div className={classesPreviewAdvantageDigit}>20т</div>
                    <p className={classesPreviewAdvantageText}>Минимальный<br /> бюджет</p>
                </div>

            </div>

        </section>
    );

}