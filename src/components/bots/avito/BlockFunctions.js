/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports : components
 */
import CardFunction from '../commons/CardFunction';

/**
 * Imports : media
 */
import { FaRobot } from 'react-icons/fa';
import { MdSupportAgent, MdIntegrationInstructions } from 'react-icons/md';
import { RiSurveyFill } from 'react-icons/ri';
import { AiOutlineCode, AiOutlineAppstore } from 'react-icons/ai';


const BlockFunctions = () =>
    <section className={'section'}>

        <h2 className={'section-title'}>
            Возможности
        </h2>

        <p className={
            'w-full mb-16 text-center '
            + 'text-[18px] leading-8 opacity-60 '
            + 'laptop:w-[720px] laptop:text-left'}>
            Мы разрабатываем ботов для Авито до полной готовности в соответствии со составленным
            техническим заданием. Ниже те воможности ботов, которые требутся нашим Заказчикам чаще
            всего. Авито - очень конверсионный канал трафика. Вместе с этим - конкуренция там крайне высокая.
            Боты помогут вам забирать весь трафик клиентов, которые обращают внимание на Ваш магазин.
        </p>

        <div className={'grid grid-cols-1 gap-y-[40px] gap-x-[30px] '
            + 'laptop:grid-cols-2 '
            + 'large:grid-cols-3'}>

            <CardFunction
                number={1}
                icon={<FaRobot className='w-full h-full' />}
                title='Автоответчик'
                description='Ваш магазин теряет почти всех клиентов, которые пишут в нерабочие часы, или же когда 
                менеджер по каким то причинам не может ответить достаточно быстро. На авито - большая конкуренция и 
                клиент, как правило, пишет нескольким продавцам. Автоответчик способен отвечать клиентам моментально,
                предоставляя базовую информацию. Наши автоответчики формируют ответ в зависимости от расписания работы
                вашего магазина.' />

            <CardFunction
                number={2}
                icon={<MdSupportAgent className='w-full h-full' />}
                title='Консультирование'
                description='Бот с функциями консультирования поможет сократить время и расходы на ответы клиентам
                на самые частозадаваемые вопросы, а так же рассказать больше о товаре и вашей компании, отбив у клиента
                желание писать конкурентам и подарив ему доверие к продавцу.' />

            <CardFunction
                number={3}
                icon={<MdIntegrationInstructions className='w-full h-full' />}
                title='Интеграции'
                description='Мы интегрируем ботов со всеми популярными системами, социальными сетями, базами данных и рассылок.
                Из популярных интеграция стоит отметить CRM системы (AmoCRM, Bitrix24, 1C), мессенджеры (Telegram, VK, Viber).'/>

            <CardFunction
                number={4}
                icon={<RiSurveyFill className='w-full h-full' />}
                title='Сбор данных'
                description='Бот может собирать у клиента любые данные. К примеру, email, номер телефона, 
                проводиться опросы' />

            <CardFunction
                number={5}
                icon={<AiOutlineCode className='w-full h-full' />}
                title='Сложные скрипты'
                description='Наши боты Avito могут реализовывать алгоритмы и сценарии любой сложности. 
                Мы уже имели опыт интеграции бота и внутренней корпоративной системы складского учета' />

            <CardFunction
                number={6}
                icon={<AiOutlineAppstore className='w-full h-full' />}
                title='Автоматизация Avito'
                description='Боты могут автоматизировать почти все процессы Авито, включая загрузку объявлений, 
                анализ креативов и многое другое.' />
        </div>
    </section>


export default BlockFunctions;