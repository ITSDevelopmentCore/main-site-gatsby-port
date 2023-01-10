/**
 * Imports : React
 */
import * as React from "react"


/**
 * Imports: Blocks
 */
import Feedback from "../components/common/blocks/Feedback";
import BlockPreview from "../components/home/blocks/BlockPreview";
import BlockAdvantages from "../components/home/blocks/BlockAdvantages";
import BlockServices from "../components/home/blocks/BlockServices";
import BlockNews from "../components/home/blocks/BlockNews";

const HomePage = () => {
  return (
    <>
      <BlockPreview />
      <BlockAdvantages />
      <BlockServices />
      <BlockNews />
      <Feedback />
    </>
  )
}

export default HomePage;

export const Head = () => {
  <>
    <title>ITS.dev - Разработка программного обеспечения</title>
    <meta name="description" content="ITS Development предлагает качественную и сертифицированную разработку ПО от мобильных платформ и сайтов до сложных систем автоматизации на базе ИИ." />
  </>
}
