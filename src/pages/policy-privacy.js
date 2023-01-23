/**
 * Imports : React
 */
import React from "react"

const PolicyPrivacy = () => {
    return (
        <section className={'card_primary mb-[100px]'}>

            <h1 className={'mb-6 font-extrabold text-[24px]'}>
                Политика конфиденциальности
            </h1>

            <iframe className="w-full h-[1000px]" src="https://drive.google.com/file/d/1OnSnS-oZg3Sz6VXWdkDgfeLnn7GN98ab/preview" allow="autoplay"></iframe>

        </section>
    )
}

export function Head() {
    return (
        <>
            <title>Политика конфиденциальности</title>
            <meta name="description" content="Политика использования Персональных данных на сайте itsdevelopment.ru" />
        </>
    )
}

export default PolicyPrivacy;


