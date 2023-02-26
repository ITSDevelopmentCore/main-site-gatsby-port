/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports: components
 */
import Layout from "../../layouts";
import Feedback from '../../components/common/blocks/Feedback';
import BlockPreview from '../../components/bots/instagram/BlockPreview';
import BlockFunctions from '../../components/bots/instagram/BlockFunctions';
import BlockStages from '../../components/bots/instagram/BlockStages';
import BlockPricing from '../../components/bots/instagram/BlockPricing';
import BlockFAQ from '../../components/bots/instagram/BlockFAQ';

/**
 * Imports : media
 */
import BackgroundDarkDefault from '../../assets/instagram/background-dark.webp';
import BackgroundLightDefault from '../../assets/instagram/background-light.webp';

const InstagramPage = () =>
  <Layout
    backgroundDark={BackgroundDarkDefault}
    backgroundLight={BackgroundLightDefault}>
    <BlockPreview />
    <BlockFunctions />
    <BlockStages />
    <BlockPricing />
    <BlockFAQ />
    <Feedback />
  </Layout>


export const Head = () => 
  <>
    <title>Разработка ботов для Инстаграм | Индивидуальные боты для масштабирования бизнеса</title>
    <meta name="description" content="У нас вы можете заказать разработку Инстаграм бота под ключ. Мы предлагаем Инстаграм ботов для бизнеса, автоматизации и прочих задач. Бесплатная консультация и круглосуточная поддержка." />
    <meta name="robots" content="index,follow" />
    <meta property="og:title" content="Разработка ботов для Инстаграм" />
    <meta property="og:description" content="С нашими ботами для Инстаграма вы можете оптимизировать свой бизнес и улучшить общение с вашими клиентами. Наши боты обеспечивают автоматическую публикацию контента, автоматический поиск и отслеживание хэштегов, а также автоматизированные ответы на сообщения от ваших клиентов. Улучшите свою эффективность и повысьте уровень обслуживания клиентов с нашими ботами для Инстаграма!" />
    <meta property="og:image" content="https://imgur.com/a/vJPrcKJ" />
    <meta property="og:url" content="https://itsdevelopment.ru/bots/instagram" />
    <link rel="canonical" href="https://itsdevelopment.ru/bots/instagram" />
  </>


export default InstagramPage;

