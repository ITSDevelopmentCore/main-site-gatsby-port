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

const PolicyCookie = () => {
    return (
        <Layout
            backgroundDark={BackgroundDarkDefault}
            backgroundLight={BackgroundLightDefault}>
        <section className={'card_primary  mb-[100px]'}>

            <h1 className={'mb-6 font-extrabold text-[24px]'}>
                Политика использования файлов Cookie
            </h1>

            <iframe className="w-full h-[1000px]" src="https://drive.google.com/file/d/1tGt4ElBK6qEBSeU6_espWpvpj4k6touH/preview" allow="autoplay"></iframe>

        </section>
        </Layout>
    )
}

export function Head() {
    return (
        <>
            <title>Страница недоступна</title>
            <meta name="description" content="Мы стараемся соответствовать стандартам IT-индустрии, поэтому в настоящий момент часть страниц сайта находится на полной переработке. Приносим извинения за неудобства." />
        </>
    )
}

export default PolicyCookie;


