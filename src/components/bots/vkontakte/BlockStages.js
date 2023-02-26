/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports : components
 */
import CardStage from '../commons/CardStages';
import CardStageMobile from '../commons/CardStageMobile';
import CardBonus from '../commons/CardBonus';

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
                    description='Короткий брифинг с менеджером и ведущим разработчиком' />
                <CardStage
                    number='2'
                    title='Составление ТЗ'
                    description='Подготовка технического задания, в подробностях описывающегно проект' />
                <CardStage
                    number='3'
                    title='Разработка'
                    description='Команда программистов под Вашим контролем разрабатывает продукт согласно ТЗ.' />
                <CardStage
                    number='4'
                    title='Тестирование'
                    description='Проводим различное тестирования для устранения потенциальных проблем.' />
                <CardStage
                    number='5'
                    title='Развертывание'
                    description='Запускаем продукт на выбранном сервере и сдаем Заказчику' />
                <CardStage
                    number='6'
                    title='Поддержка'
                    description='Следим за продуктом 24 на 7, оказывая реактивную поддержку по всем вопросам.' />
            </div>

            <div className={
                'flex flex-col space-y-[16px] '
                + 'laptop:hidden'}>
                <CardStageMobile
                    number='1'
                    title='Встреча с заказчиком'
                    description='Короткий брифинг с менеджером и ведущим разработчиком' />
                <CardStageMobile
                    number='2'
                    title='Составление ТЗ'
                    description='Подготовка технического задания, в подробностях описывающегно проект' />
                <CardStageMobile
                    number='3'
                    title='Разработка'
                    description='Команда программистов под Вашим контролем разрабатывает продукт согласно ТЗ.' />
                <CardStageMobile
                    number='4'
                    title='Тестирование'
                    description='Проводим различное тестирования для устранения потенциальных проблем.' />
                <CardStageMobile
                    number='5'
                    title='Развертывание'
                    description='Запускаем продукт на выбранном сервере и сдаем Заказчику' />
                <CardStageMobile
                    number='6'
                    title='Поддержка'
                    description='Следим за продуктом 24 на 7, оказывая реактивную поддержку по всем вопросам.' />
            </div>

            <div className={'flex flex-col mt-[90px] large:mt-[100px] space-y-[18px] '
                + 'laptop:flex-row laptop:justify-between laptop:space-y-0 laptop:space-x-[95px]'}>

                <CardBonus
                    title='Аналитика работы'
                    description='Во время разработки мы предлагаем Заказчику, что можно поменять или улучшить в его видении для достижения максимальных показателей. Наша задача - масштабировать и развивать Ваш бизнес. После завершения проекта - бесплатно анализируем работу и предлагаем улучшения по истечению определенных периодов'
                    icon={<RiApps2Fill className='w-full h-full' />} />

                <CardBonus
                    title='Собственные сервера'
                    description='Мы размещаем все проекты на партнерских серверах ООО Яндекс. Это дает гарантию отсутствия проблем, с которыми сталкиваются арендаторы западных облачных услуг, а так же дает максимальную скорость при доработке и устранении неполадок. Стоимость такого хостинга в месяц не превышает 50 рублей.'
                    icon={<HiServerStack className='w-full h-full' />} />

            </div>

        </section>


export default BlockStages;