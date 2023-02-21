/**
 * Imports : React
 */
import React from "react"

/**
 * Imports: Blocks
 */
import Layout from "../../layouts";
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

export function Head() {
    return (
        <>
            <title>Разработка Телеграм ботов</title>
            <meta name="description" content="У нас вы можете заказать разработку Телеграм бота под ключ. Мы предлагаем Телеграм боты для бизнеса, автоматизации и прочих задач. Бесплатная консультация и круглосуточная поддержка." />
        </>)
}

export default TelegramPage;


