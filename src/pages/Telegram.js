/**
 * Imports : React
 */
import React from "react"
import * as ReactDOM from 'react-dom/client';

/**
 * Imports: Blocks
 */

import Feedback from "../components/common/blocks/Feedback";
import Preview from "../components/telegram/blocks/BlockPreview";
import BlockAdvantages from "../components/telegram/blocks/BlockAdvantages";
import BlockWebApps from "../components/telegram/blocks/BlockWebApps";
import BlockStages from "../components/telegram/blocks/BlockStages";
import BlockPortfolio from "../components/telegram/blocks/BlockPortfolio";


export default function TelegramPage() {
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


