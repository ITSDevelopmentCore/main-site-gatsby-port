/**
 * Imports : React
 */
import React from 'react';
import Symbol from '../components/common/view/Symbol';

const PolicyOrganization = () => {
    return (
        <section className={'card_primary mb-[100px]'}>

            <h1 className={
                'mb-6 '
                + 'font-extrabold text-[24px]'}>
                Информация о предприятии
            </h1>

            <div className={
                'grid grid-cols-1 mb-[25px] gap-[16px] '
                + 'laptop:grid-cols-2 laptop:w-[50%]'}>
                <span className='font-bold'>ОГРНИП: </span>
                <span>322665800197196</span>
                <span className='font-bold'>ИНН: </span>
                <span>667112766150 </span>
            </div>

            <h1 className={
                'mb-[25px] '
                + 'font-extrabold text-[24px]'}>
                Контакты
            </h1>

            <div className={
                'grid grid-cols-1 mb-[25px] gap-[16px] '
                + 'laptop:grid-cols-2 laptop:w-[50%]'}>
                <span className='font-bold'>Поддержка: </span>
                <span>support<Symbol symbol='@'></Symbol>itsdevelopment.ru</span>
                <span className='font-bold'>Горячая линия: </span>
                <span>
                    8 <Symbol symbol="(" />800<Symbol symbol=")" /> 101-52-28
                </span>
            </div>

        </section>
    )
}

export function Head() {
    return (
        <>
            <title>Контактная информация</title>
            <meta name="description" content="ITS.Development прикладывает все усилия, что бы Ваши продукты не имели конкурентов в цифровом пространстве, а бизнес процессы приносили только удовольствие." />
        </>
    )
}

export default PolicyOrganization;


