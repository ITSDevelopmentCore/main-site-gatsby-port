/**
 * Imports : React
 */
import React, { useContext } from "react";
import { ThemeContext } from '../../../layouts/wrapper';

/**
 * Imports : media
 */
import { StaticImage } from "gatsby-plugin-image";

export default function BlockPreview() {

    const { theme } = useContext(ThemeContext)

    const buttonClickHandler = () => {
        document.getElementById('feedback').scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <section className={
            'flex flex-col items-center mt-[50px] '
            + 'laptop:flex-row laptop:items-center '}>

            <div
                className={
                    'flex flex-col justify-between items-center '
                    + 'laptop:basis-1/2 laptop:items-start '}>

                <h2 className={
                    'mb-[28px] text-[50px] leading-[57px] '
                    + 'font-extrabold text-center '
                    + 'laptop:text-[75px] laptop:leading-[85px] laptop:text-left '
                    + 'desktop:text-[93px] desktop:leading-[106px]'}>
                    its.
                    <span className={'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500'}>dev</span>

                </h2>

                <h1 className={
                    'mb-[23px] '
                    + 'font-bold text-[16px] leading-[23px] text-center '
                    + 'laptop:text-[26px] laptop:leading-[37px] laptop:text-left '
                    + 'desktop:text-[26px] desktop:leading-[37px] desktop:mb-[35px] '}>
                    Разработка качественного<br /> программного обеспечения
                </h1>


                <div className={
                    'flex justify-center space-x-[10px] mb-[10px] text-[12px] '
                    + 'desktop:text-[18px] desktop:leading-[27px] desktop:space-x-[15px] desktop:mb-[19px] '}>

                    <button className={
                        'px-[18px] py-[12px] '
                        + 'border border-[#D9D9D9] rounded-[10px] hover:scale-105 cursor-pointer transition-transform duration-200 '
                        + 'desktop:px-[20px] desktop:py-[13px] '
                        + 'dark:border-[#253646] '}>
                        Мобильная разработка
                    </button>

                    <button className={
                        'px-[18px] py-[12px] '
                        + 'border border-[#D9D9D9] rounded-[10px] hover:scale-105 cursor-pointer transition-transform duration-200 '
                        + 'desktop:px-[20px] desktop:py-[13px] '
                        + 'dark:border-[#253646] '}>
                        Web разработка
                    </button>

                </div>

                <div className={
                    'flex justify-center space-x-[10px] mb-[50px] text-[12px] '
                    + 'desktop:text-[18px] desktop:leading-[27px] '}>

                    <button className={
                        'px-[18px] py-[12px] '
                        + 'border border-[#D9D9D9] rounded-[10px] hover:scale-105 cursor-pointer transition-transform duration-200 '
                        + 'desktop:px-[20px] desktop:py-[13px] '
                        + 'dark:border-[#253646] '}>
                        Telegram боты
                    </button>

                    <button className={
                        'px-[18px] py-[12px] '
                        + 'border border-[#D9D9D9] rounded-[10px] hover:scale-105 cursor-pointer transition-transform duration-200 '
                        + 'desktop:px-[20px] desktop:py-[13px] '
                        + 'dark:border-[#253646] '}>
                        Разработка MVP
                    </button>
                </div>

                <button
                    onClick={buttonClickHandler}
                    className={
                        'mt-[20px] mb-[50px] px-[20px] py-[11px] w-fit mx-auto '
                        + 'text-white rounded-[6px] text-[14px] leading-[20px] font-bold shadow-blue bg-gradient-to-t from-sky-500 to-sky-300 dark:to-sky-500 transition-all duration-200 hover:shadow-blue-extended '
                        + 'laptop:mx-0 laptop:px-[80px] laptop:py-[20px] laptop:text-[22px] laptop:leading-[33px] laptop:mt-[42px]'}>
                    Свяжитесь со мной
                </button>

            </div>

            {theme === 'dark' ?
                <StaticImage
                    className={
                        'h-[240px] '
                        + 'laptop:basis-1/2 laptop:max-w-[50%] laptop:h-full'}
                        placeholder="blurred"
                    alt='Hero'
                    src='../../../assets/home/illustration_preview-dark.webp' />
                :
                <StaticImage
                    className={
                        'h-[240px] '
                        + 'laptop:basis-1/2 laptop:max-w-[50%] laptop:h-full'}
                        placeholder="blurred"
                    alt='Hero'
                    src='../../../assets/home/illustration_preview-light.webp' />
            }

        </section>
    )


}