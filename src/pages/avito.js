/**
 * Imports : React
 */
import React from "react"

/**
 * Imports: Blocks
 */

import Feedback from "../components/common/blocks/Feedback";
import Preview from "../components/avito/blocks/BlockPreview";


const AvitoPage = () => {
    return (
        <>
          <Preview />
            <Feedback />
        </>
    )
}

export function Head() {
    return (
        <>
            <title>Разработка Авито ботов</title>
            <meta name="description" content="У нас вы можете заказать разработку Авито бота под ключ. Мы предлагаем Авито боты для бизнеса, автоматизации и прочих задач. Бесплатная консультация и круглосуточная поддержка." />
        </>)
}

export default AvitoPage;


