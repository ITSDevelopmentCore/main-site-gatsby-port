/**
 * Imports : React
 */
import React from "react"
import Symbol from '../../src/components/common/view/Symbol'

const PolicyOrganization = () => {
    return (
        <section className={'card_primary  mb-[100px]'}>

  <h1 className={'mb-2 font-extrabold text-[24px]'}>
            О компании 
            </h1>

            <div className="space-y-1">
                <p>ОГРНИП: 322665800197196</p>
                <p>ИНН: 667112766150 </p>
                <p className="font-bold text-[18px]">Контакты: </p>
                <p>Почта: itsdevelopmentru<Symbol symbol='@'></Symbol>gmail.com</p>
            </div>

        </section>
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

export default PolicyOrganization;


