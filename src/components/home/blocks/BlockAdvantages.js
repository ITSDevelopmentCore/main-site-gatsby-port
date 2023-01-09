/**
 * Imports : React
 */
import React from "react";

/**
 * Imports : Media
 */
import IllustrationAdvantagesYearLight from '../../assets/media/illustration_advantages-year-light.png';
import IllustrationAdvantagesYearDark from '../../assets/media/illustration_advantages-year-dark.png';
import IllustrationAdvantagesClientsLight from '../../assets/media/illustration_advantages-clients-light.png';
import IllustrationAdvantagesClientsDark from '../../assets/media/illustration_advantages-clients-dark.png';
import IllustrationAdvantagesProjectsLight from '../../assets/media/illustration_advantages-projects-light.png';
import IllustrationAdvantagesProjectsDark from '../../assets/media/illustration_advantages-projects-dark.png';
import IllustrationAdvantagesTempLight from '../../assets/media/illustration_advantages-temp-light.png';
import IllustrationAdvantagesTempDark from '../../assets/media/illustration_advantages-temp-dark.png';

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