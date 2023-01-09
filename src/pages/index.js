/**
 * Imports : React
 */
import * as React from "react"

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

export const Head = () => <title>Home Page</title>
