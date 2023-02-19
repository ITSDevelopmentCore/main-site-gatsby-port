/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports: Blocks
 */
import Layout from "../layouts";
import Feedback from '../components/common/blocks/Feedback';
import BlockPreview from '../components/avito/blocks/BlockPreview';
import BlockPossibilities from '../components/avito/blocks/BlockPossibilities';
import BlockStages from '../components/avito/blocks/BlockStages';
import BlockPricing from '../components/avito/blocks/BlockPricing';
import BlockFAQ from '../components/avito/blocks/BlockFAQ';

/**
 * Imports : media
 */
import BackgroundDarkDefault from '../assets/avito/background-dark.webp';
import BackgroundLightDefault from '../assets/avito/background-light.webp';

const AvitoPage = () => {
  return (
    <Layout
      backgroundDark={BackgroundDarkDefault}
      backgroundLight={BackgroundLightDefault}>
      <BlockPreview />
      <BlockPossibilities/>
      <BlockStages/>
      <BlockPricing/>
      {/* <BlockFAQ/> */}
      <Feedback />
    </Layout>
  );
};

export function Head() {
  return (
    <>
      <title>Разработка ботов для Авито</title>
      <meta
        name='description'
        content='У нас вы можете заказать разработку бота для Авито под ключ. Мы предлагаем ботов Авито для бизнеса, автоматизации и прочих задач. Бесплатная консультация и круглосуточная поддержка.'
      />
    </>
  );
}

export default AvitoPage;

