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
import Layout from "../layouts/wrapper";

const NotFoundPage = () =>
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

export const Head = () =>
  <>
    <title>Not found</title>
    <meta name="description" content="Такой страницы не существует" />
  </>

export default NotFoundPage
