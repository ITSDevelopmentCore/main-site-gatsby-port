/**
 * Imports : React
 */
import React from "react";

/**
 * Imports : media
 */
import IllustrationAdvantagesYearLight from '../../../assets/home/illustration_advantages-year-light.webp';
import IllustrationAdvantagesYearDark from '../../../assets/home/illustration_advantages-year-dark.webp';
import IllustrationAdvantagesClientsLight from '../../../assets/home/illustration_advantages-clients-light.webp';
import IllustrationAdvantagesClientsDark from '../../../assets/home/illustration_advantages-clients-dark.webp';
import IllustrationAdvantagesProjectsLight from '../../../assets/home/illustration_advantages-projects-light.webp';
import IllustrationAdvantagesProjectsDark from '../../../assets/home/illustration_advantages-projects-dark.webp';
import IllustrationAdvantagesTempLight from '../../../assets/home/illustration_advantages-temp-light.webp';
import IllustrationAdvantagesTempDark from '../../../assets/home/illustration_advantages-temp-dark.webp';
import { FiArrowDownRight } from 'react-icons/fi';
import CardAdvantage from "../view/CardAdvantage";

export default function BlockAdvantages() {

    return (
        <section className={
            'mt-[185px] '
        }>

            <h2 className={
                'mb-[55px] '
                + 'text-[28px] leading-[42px] font-extrabold text-center '
                + 'laptop:text-[46px] laptop:leading-[52px] laptop:text-left laptop:w-[300px] '
                + 'large:text-[58px] large:leading-[66px] '
                + 'desktop:text-[64px] desktop:leading-[72px]'}>
                its.dev
                <FiArrowDownRight className="text-sky-500 inline-block" />
            </h2>

            <div className={
                'flex flex-col space-y-[30px] '
                + 'laptop:flex-row laptop:space-x-[30px] laptop:space-y-0 '}>

                <CardAdvantage
                    imageLight={IllustrationAdvantagesYearLight}
                    imageDark={IllustrationAdvantagesYearDark}
                    title={'Работаем с 2019 года'} />
                <CardAdvantage
                    imageLight={IllustrationAdvantagesClientsLight}
                    imageDark={IllustrationAdvantagesClientsDark}
                    title={'Заказчики по всей России и Европе'} />
                <CardAdvantage
                    imageLight={IllustrationAdvantagesProjectsLight}
                    imageDark={IllustrationAdvantagesProjectsDark}
                    title={'50 завершенных проектов'} />
                <CardAdvantage
                    imageLight={IllustrationAdvantagesTempLight}
                    imageDark={IllustrationAdvantagesTempDark}
                    title={'Лидирующие позиции по признанным рейтингам'} />

            </div>

        </section>
    )

}