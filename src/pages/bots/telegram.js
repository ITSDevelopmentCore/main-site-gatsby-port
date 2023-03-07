/**
 * Imports : React
 */
import React from "react"

/**
 * Imports: Blocks
 */
import Layout from "../../layouts/wrapper";
import Feedback from "../../components/common/blocks/Feedback";
import Preview from "../../components/bots/telegram/blocks/BlockPreview";
import BlockAdvantages from "../../components/bots/telegram/blocks/BlockAdvantages";
import BlockWebApps from "../../components/bots/telegram/blocks/BlockWebApps";
import BlockStages from "../../components/bots/telegram/blocks/BlockStages";
import BlockPortfolio from "../../components/bots/telegram/blocks/BlockPortfolio";

/**
 * Imports : media
 */
import BackgroundDarkDefault from '../../assets/home/background-dark.webp';
import BackgroundLightDefault from '../../assets/home/background-light.webp';

const TelegramPage = () => {
    return (
        <Layout
                backgroundDark={BackgroundDarkDefault}
                backgroundLight={BackgroundLightDefault}>
            <Preview />
            <BlockAdvantages />
            <BlockWebApps />
            <BlockStages />
            <BlockPortfolio />
            <Feedback />
        </Layout>
    )
}

export const Head = () =>
    <>
        <title>Разработка Телеграм ботов</title>
        <meta name="description" content="У нас вы можете заказать разработку Телеграм бота под ключ. Мы предлагаем Телеграм боты для бизнеса, автоматизации и прочих задач. Бесплатная консультация и круглосуточная поддержка." />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Разработка ботов для Инстаграм" />
        <meta property="og:description" content="Мы занимаемся разработкой телеграм ботов под ключ для решения разных задач. Наши боты уже автоматизируют продажи, осуществляют воронки продаж и упрощают работу в десятках интернет магазинов и нишах по всей России." />
        <meta property="og:image" content="https://imgur.com/a/vJPrcKJ" />
        <meta property="og:url" content="https://itsdevelopment.ru/bots/telegram" />
        <link rel="canonical" href="https://itsdevelopment.ru/bots/telegram" />
    </>

export default TelegramPage;


