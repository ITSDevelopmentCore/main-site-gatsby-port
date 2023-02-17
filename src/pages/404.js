/**
 * Imports : React
 */
import * as React from "react"

/**
 * Imports : media
 */
import BackgroundDarkDefault from '../assets/home/background-dark.webp';
import BackgroundLightDefault from '../assets/home/background-light.webp';

/**
 * Imports: Blocks
 */
import Layout from "../layouts";

const NotFoundPage = () => {
  return (
    <Layout
      backgroundDark={BackgroundDarkDefault}
      backgroundLight={BackgroundLightDefault}>
      <section className={'card_primary mt-[100px]'}>

        <h1 className={'mb-6 font-extrabold text-[24px]'}>
          404
        </h1>

        <p className={'opacity-60'}>
          {'Страница не найдена.'}
        </p>

      </section>
    </Layout>
  )
}

export default NotFoundPage

export function Head() {
  return (
    <>
      <title>Not found</title>
      <meta name="description" content="Мы стараемся постоянно улучшать наши показатели, но пока не успели сделать эту страничку" />
    </>
  )
}