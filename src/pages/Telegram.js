/**
 * Imports : React
 */
import React from "react"

/**
 * Imports: Blocks
 */

import Feedback from "../components/common/blocks/Feedback";
import Preview from "../components/telegram/blocks/BlockPreview";
import BlockAdvantages from "../components/telegram/blocks/BlockAdvantages";
import BlockWebApps from "../components/telegram/blocks/BlockWebApps";
import BlockStages from "../components/telegram/blocks/BlockStages";
import BlockPortfolio from "../components/telegram/blocks/BlockPortfolio";


const TelegramPage = () => {
    return (
        <>
            <Preview />
            <BlockAdvantages />
            <BlockWebApps />
            <BlockStages />
            <BlockPortfolio />
            <Feedback />
        </>
    )
}

export const Head = () => <title>Разработка Телеграм ботов</title>

export default TelegramPage;


