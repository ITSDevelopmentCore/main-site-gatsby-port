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
import { MdSupportAgent } from 'react-icons/md';
import { MdIntegrationInstructions } from 'react-icons/md';
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
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu' />

            <CardFunction
                number={3}
                icon={<MdIntegrationInstructions className='w-full h-full' />}
                title='Интеграции'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu'
                more='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu'/>

            <CardFunction
                number={4}
                icon={<RiSurveyFill className='w-full h-full' />}
                title='Опросы'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu' />

            <CardFunction
                number={5}
                icon={<AiOutlineCode className='w-full h-full' />}
                title='Сложные скрипты'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu' />

            <CardFunction
                number={6}
                icon={<AiOutlineAppstore className='w-full h-full' />}
                title='Сложные скрипты'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu' />
        </div>
    </section>


export default BlockFunctions;