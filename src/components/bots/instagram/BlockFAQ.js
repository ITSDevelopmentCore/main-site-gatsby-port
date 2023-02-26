/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports : components
 */
import ElementFAQ from '../commons/ElementFAQ';

/**
 * Imports : scripts
 */
import { smoothToFeedback } from '../../../scripts/changeViewByIdScripts'

export const BlockFAQ = () => 
        <section className={'section'}>

            <h2 className={'section-title'}>
                FAQ
            </h2>

            <div className={'space-y-[16px]'}>
                <ElementFAQ
                    title='Хостинг бота'
                    description='Мы размещаем все проекты Заказчиков на партнерских серверах ООО 
                    Яндекс Клауд по льготной стоимости за 170 р / месяц. Аналогично мы можем 
                    развернуть и запустить проект на сервере Заказчика, либо на любой другой 
                    облачной платформе, которую выбрал Заказчик' />

                <ElementFAQ
                    title='Мне нужно решение, которое немного отличается от готовых'
                    description='В таком случае мы доработаем уже имеющеегося у нас готового бота под 
                    Ваши задачи. Стоимость такой работы будет существенно ниже, чем разработка с нуля, 
                    и полностью зависит масштабов изменений' />

                <ElementFAQ
                    title='Мой бюджет серьезно ограничен'
                    description='В таком случае мы предложим Вам способы оптимизации бота, что бы 
                    сократить бюджет. Чаще всего то, что мы предлагаем - оказывается более эффективным,
                     чем изначальный вариант Заказчика.' />

                <ElementFAQ
                    title='Доработка проектов после релиза'
                    description='Когда Заказчику требуется добавить, или изменить функционал бота - 
                    мы создаем дополнение к договору в день обращения, составляем упрощенное 
                    техническое задание и оперативно приступаем к работе.' />
            </div>

            <button className={'button mt-[40px] p-[20px] w-full '
                + 'font-bold bg-white rounded-[25px] text-sky-500 border-2 border-white transition-all duration-200 hover:text-white hover:bg-transparent '
                + 'dark:bg-transparent dark:border-sky-500 dark:hover:border-white'}
                onClick={smoothToFeedback}>
                Задать вопрос
            </button>

        </section>

export default BlockFAQ



