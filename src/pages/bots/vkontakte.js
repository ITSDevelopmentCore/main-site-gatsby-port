/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports: components
 */
import Layout from "../../layouts/wrapper";
import Feedback from '../../components/common/blocks/Feedback';
import BlockPreview from '../../components/bots/vkontakte/BlockPreview';
import BlockFunctions from '../../components/bots/vkontakte/BlockFunctions';
import BlockStages from '../../components/bots/vkontakte/BlockStages';
import BlockPricing from '../../components/bots/vkontakte/BlockPricing';
import BlockFAQ from '../../components/bots/vkontakte/BlockFAQ';

/**
 * Imports : media
 */
import BackgroundDarkDefault from '../../assets/vkontakte/background-dark.webp';
import BackgroundLightDefault from '../../assets/vkontakte/background-light.webp';

const VkontaktePage = () =>
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
    <title>Разработка ботов для Вконтакте | Индивидуальные боты масштабирования бизнеса</title>
    <meta name="description" content="Развивайте свой бизнес Вконтакте с помощью наших ботов! Наша команда экспертных разработчиков создает высокопроизводительных ботов, которые автоматизируют задачи, экономят время и повышают эффективность. От генерации лидов до управления инвентарем, наши боты могут обработать все. Получите бесплатную консультацию и узнайте, как наши боты могут вывести ваш бизнес Вконтакте на новый уровень." />
    <meta name="robots" content="index,follow" />
    <meta property="og:title" content="Разработка ботов для Avito" />
    <meta property="og:description" content="Развивайте свой бизнес на Avito с помощью наших ботов! Наша команда экспертных разработчиков создает высокопроизводительных ботов, которые автоматизируют задачи, экономят время и повышают эффективность. От генерации лидов до управления инвентарем, наши боты могут обработать все. Получите бесплатную консультацию и узнайте, как наши боты могут вывести ваш бизнес на Вконтакте на новый уровень." />
    <meta property="og:image" content="https://imgur.com/a/vJPrcKJ" />
    <meta property="og:url" content="https://itsdevelopment.ru/vkontakte" />
    <link rel="canonical" href="https://itsdevelopment.ru/vkontakte" />
  </>


export default VkontaktePage;

