/**
 * Imports : React
 */
import * as React from "react"


/**
 * Imports: Blocks
 */
import Layout from "../layouts";
import Feedback from "../components/common/blocks/Feedback";
import BlockPreview from "../components/home/blocks/BlockPreview";
import BlockAdvantages from "../components/home/blocks/BlockAdvantages";
import BlockServices from "../components/home/blocks/BlockServices";
import BlockNews from "../components/home/blocks/BlockNews";
import { Script } from "gatsby";

/**
 * Imports : media
 */
import BackgroundDarkDefault from '../assets/home/background-dark.webp';
import BackgroundLightDefault from '../assets/home/background-light.webp';

const HomePage = () => {
  return (
    <Layout
      backgroundDark={BackgroundDarkDefault}
      backgroundLight={BackgroundLightDefault}>
      <BlockPreview />
      <BlockAdvantages />
      <BlockServices />
      <BlockNews />
      <Feedback />
    </Layout>
  )
}

export default HomePage;

export function Head() {
  return (
    <>
      <title>ITS.dev - Разработка программного обеспечения</title>
      <meta name="description" content="ITS Development предлагает качественную и сертифицированную разработку ПО от мобильных платформ и сайтов до сложных систем автоматизации на базе ИИ." />
    </>
  )
}
