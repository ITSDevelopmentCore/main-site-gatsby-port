/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports : components
 */
import ElementFAQ from '../commons/ElementFAQ';

export default function BlockFAQ() {

    const buttonClickHandler = () => {
        document.getElementById('feedback').scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <section className={
            'mt-[120px] '
            + 'laptop:mt-[265px]'}>

            <h2 className={'mb-[50px] section-title'}>
                FAQ
            </h2>

            <div className={'space-y-[16px]'}>

                <ElementFAQ
                    title='Хостинг бота'
                    description='Мы размещаем все проекты Заказчиков на партнерских серверах ООО Яндекс Клауд по льготной стоимости за 170 р / месяц. 
                    Аналогично мы можем развернуть и запустить проект на сервере Заказчика, либо на любой другой облачной платформе, которую выбрал Заказчик' />

                <ElementFAQ
                    title='Изменения бота после завершения работ'
                    description='По завершению работ мы предоставляем Заказчику 30 минут времени разработчика, которыми Заказчик может воспользоваться для внесения небольших правок. 
                    Правки и модификации, выходящие за рамки этого лимита оплачиваются отдельно по стандартной ставке наших разработчиков, как и для основного заказа - 1000 рублей / час' />

                <ElementFAQ
                    title='Бессрочная гарантия'
                    description='Мы действительно предоставляем бессрочную гарантию. Важно отметить, что гарантийными являются только те случаи, когда поломка произошла по нашей вине. Если же вина лежит на третьей стороне (к примеру, изменение способа взаимодействия с Telegram),
                    то такой случай гарантийным не является.' />

                <ElementFAQ
                    title='Отчетность'
                    description='Мы ведем стандартный документооборот, включающий договор, техническое задание, счета для оплаты, счет-фактуры. Кроме этого мы предоставляем Заказчику отчетность по ходу работы два раза в неделю, а так же оперативную
                    сводку в любой момент времени.' />

            </div>

            <button className={'mt-[40px] w-full '
                + 'button font-bold bg-white rounded-xl text-sky-500 border-2 border-white transition-all duration-200 hover:text-white hover:bg-transparent '
                + 'dark:bg-transparent dark:border-sky-500 dark:hover:border-white'}
                onClick={buttonClickHandler}>
                Задать вопрос
            </button>


        </section>
    )
}


