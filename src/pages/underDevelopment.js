/**
 * Imports : React
 */
import React from "react"

/**
 * Imports : media
 */
import BackgroundDarkDefault from '../assets/home/background-dark.webp';
import BackgroundLightDefault from '../assets/home/background-light.webp';

/**
 * Imports: Blocks
 */
import Layout from "../layouts";

const DevelopmentPage = () => 
        <Layout
            backgroundDark={BackgroundDarkDefault}
            backgroundLight={BackgroundLightDefault}>
            <section className={'card_primary mt-[100px]'}>

                <h4 className={'mb-6 font-extrabold text-[24px]'}>
                    Страница временно недоступна
                </h4>

                <p className={'opacity-60'}>
                    {'Мы стараемся соответствовать стандартам IT-индустрии, поэтому в настоящий момент часть страниц сайта находится на полной переработке. Приносим извинения за неудобства.'}
                </p>

            </section>
        </Layout>

export const Head = () =>
        <>
            <title>Страница недоступна</title>
            <meta name="description" content="Мы стараемся соответствовать стандартам IT-индустрии, поэтому в настоящий момент часть страниц сайта находится на полной переработке. Приносим извинения за неудобства." />
        </>


export default DevelopmentPage;


