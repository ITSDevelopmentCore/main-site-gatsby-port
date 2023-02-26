/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports : components
 */
import CardStage from '../view/CardStage';
import CardStageMobile from '../view/CardStageMobile';
import CardBonus from '../view/CardBonus';

/**
 * Imports : media
 */
import { RiApps2Fill } from 'react-icons/ri';
import { HiServerStack } from 'react-icons/hi2';


const BlockStages = () => 
        <section className={'section'}>

            <h2 className={'section-title'}>
                Процесс работы
            </h2>

            <div className={
                'hidden '
                + 'laptop:grid laptop:grid-cols-3 laptop:gap-y-[20px] laptop:gap-x-[20px] '
                + 'large:gap-x-[40px]'}>
                <CardStage
                    number='1'
                    title='Встреча с заказчиком'
                    description='Встреча лично или в онлайне. Выяснение деталей проекта.' />
                <CardStage
                    number='2'
                    title='Составление ТЗ'
                    description='Готовим официальное ТЗ, описывающее все в мельчайших деталях.' />
                <CardStage
                    number='3'
                    title='Разработка'
                    description='Команда программистов высокой квалификации разрабатывает продукт согласно ТЗ.' />
                <CardStage
                    number='4'
                    title='Тестирование'
                    description='Тщательно тестируем продукт для выявления ошибок в работе.' />
                <CardStage
                    number='5'
                    title='Развертывание'
                    description='Запускаем продукт на наших собственных серверах и выпускаем его в работу.' />
                <CardStage
                    number='6'
                    title='Поддержка'
                    description={'Следим за продуктом 24 на 7, оказывая реактивную поддержку по всем вопросам.'} />
            </div>

            <div className={
                'flex flex-col space-y-[16px] '
                + 'laptop:hidden'}>
                <CardStageMobile
                    number='1'
                    title='Встреча с заказчиком'
                    description='Встреча лично или в онлайне. Выяснение деталей проекта.' />
                <CardStageMobile
                    number='2'
                    title='Составление ТЗ'
                    description='Готовим официальное ТЗ, описывающее все в мельчайших деталях.' />
                <CardStageMobile
                    number='3'
                    title='Разработка'
                    description='Команда программистов высокой квалификации разрабатывает продукт согласно ТЗ.' />
                <CardStageMobile
                    number='4'
                    title='Тестирование'
                    description='Тщательно тестируем продукт для выявления ошибок в работе.' />
                <CardStageMobile
                    number='5'
                    title='Развертывание'
                    description='Запускаем продукт на наших собственных серверах и выпускаем его в работу.' />
                <CardStageMobile
                    number='6'
                    title='Поддержка'
                    description={'Следим за продуктом 24 на 7, оказывая реактивную поддержку по всем вопросам.'} />
            </div>

            <div className={'flex flex-col mt-[90px] large:mt-[180px] space-y-[18px] '
                + 'laptop:flex-row laptop:justify-between laptop:space-y-0 laptop:space-x-[95px]'}>

                <CardBonus
                    title='Аналитика работы'
                    description='Во время разработки мы предлагаем Заказчику, что можно поменять или улучшить в его видении для достижения максимальных показателей. Наша задача - масштабировать и развивать Ваш бизнес. После завершения проекта - бесплатно анализируем работу и предлагаем улучшения по истечению определенных периодов'
                    icon={<RiApps2Fill className='text-sky-500 w-14 h-14 absolute top-10 right-10' />} />

                <CardBonus
                    title='Собственные сервера'
                    description='Мы размещаем все проекты на партнерских серверах ООО Яндекс. Это дает гарантию отсутствия проблем, с которыми сталкиваются арендаторы западных облачных услуг, а так же дает максимальную скорость при доработке и устранении неполадок. Стоимость такого хостинга в месяц не превышает 50 рублей.'
                    icon={<HiServerStack className='text-sky-500 w-14 h-14 absolute top-10 right-10' />} />

            </div>

        </section>

export default BlockStages