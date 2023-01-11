/**
 * Imports : React
 */
import React from "react"

const DevelopmentPage = () => {
    return (
        <section className={'card_primary mt-[100px]'}>

                <h4 className={'mb-6 font-extrabold text-[24px]'}>
                    Страница временно недоступна
                </h4>

                <p className={'opacity-60'}>
                    {'Мы стараемся соответствовать стандартам IT-индустрии, поэтому в настоящий момент часть страниц сайта находится на полной переработке. Приносим извинения за неудобства.'}
                </p>
            
        </section>
    )
}

export const Head = () => {
    <>
        <title>Страница недоступна</title>
        <meta name="description" content="Мы стараемся соответствовать стандартам IT-индустрии, поэтому в настоящий момент часть страниц сайта находится на полной переработке. Приносим извинения за неудобства." />
    </>
}

export default DevelopmentPage;


