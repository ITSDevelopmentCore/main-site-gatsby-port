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

const PolicyCookie = () =>
    <Layout
        backgroundDark={BackgroundDarkDefault}
        backgroundLight={BackgroundLightDefault}>
        <section className={'card_primary mb-[100px]'}>

            <h1 className={'mb-6 font-extrabold text-[24px]'}>
                Политика использования файлов Cookie
            </h1>

            <iframe
                title="policyCookieIframe"
                className="w-full h-[1000px]"
                src="https://drive.google.com/file/d/1tGt4ElBK6qEBSeU6_espWpvpj4k6touH/preview"
                allow="autoplay" />

        </section>
    </Layout>


export const Head = () =>
    <>
        <title>Политика Cookie</title>
        <meta name="description" content="Политика использования файлов Cookies на сайте itsdevelopment.ru" />
    </>


export default PolicyCookie;


