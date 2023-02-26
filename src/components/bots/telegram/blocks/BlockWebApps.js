/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports : components
 */
import CardWebAppsMobile from '../view/CardWebAppsMobile';
import SwiperWebApps from '../view/SwiperWebApps'

const BlockWebApps = () => 
        <section className='section'>

            <h2 className='section-title'>
                Telegram <span className='text-sky-500'>Web Apps</span>
            </h2>

            <p className={
                'w-full mb-16 text-center '
                + 'text-[18px] leading-8 opacity-60 '
                + 'laptop:w-[722px] laptop:text-left'}>
                Telegram боты с Web Apps - новое слово в маркетинге 2023 года, дающие гарантированный прирост повторных конверсий в кратчайший срок и с минимальным бюджетом.
                Они способны полностью заменить мобильное приложение для малого и среднего бизнеса.
                Данные боты превосходно работают на всех типах девайсов от смартфонов до Smart TV.
                У нас Вы можете заказать Телеграм бота с любым функционалом, от онлайн магазина и записи к Вашим специалистам до сложного уникального функционала.
                Мы предоставляем решения под ключ, включающие весь цикл разработки от дизайна и прототипирования до развертывания на наших серверах и готовности к работе.
                Имея уже готовое решение всегда под рукой - клиент даже не будет думать о заказе у Ваших конкурентов.
            </p>

            <SwiperWebApps />

            <div className='laptop:hidden'>
                <div className="carousel p-4 space-x-[29px] bg-neutral rounded-box">
                    <div className="carousel-item">
                        <CardWebAppsMobile
                            title='Сфера услуг'
                            description='Мы разрабатываем уникальный дизайн, соответствующий Вашим пожеланиям и стилистике бренда, но в то же время имеем солидное количество шаблонов, 
                            которые позволяют нам создавать Telegram ботов еще быстрее и дешевле.'>
                        </CardWebAppsMobile>
                    </div>
                    <div className="carousel-item">
                        <CardWebAppsMobile
                            title='E-commerce'
                            description='Демонстрационный бот для демонстрации возможностей Telegram Web Apps в сфере E-Commerce. 
                            Мы удовлетворяем все Ваши потребности в E-Commerce внутри Telegram, интегрируя все необходимые платежные и CRM системы.'>
                        </CardWebAppsMobile>
                    </div>
                    <div className="carousel-item">
                        <CardWebAppsMobile
                            title='Корпоративные боты'
                            description='Данные боты являются идеальным решением, когда нужно закрыть, или автоматизировать внутренние корпоративные бизнес процессы. 
                            Мы проводим интеграции со всеми требуемыми системами компании.'>
                        </CardWebAppsMobile>
                    </div>
                    <div className="carousel-item">
                        <CardWebAppsMobile
                            title='Food tech'
                            description='Мы создаем ботов, которые могут стать вашим любимым и в определенных нишах лучшим решением для удержания клиентов и превращения их в постоянных. 
                            Food tech сфера является одной из таких.'>
                        </CardWebAppsMobile>
                    </div>
                    <div className="carousel-item">
                        <CardWebAppsMobile
                            title='Сфера образования'
                            description='Боты с Telegram Web Apps могут стать самым эффективным решением проблем в любой сфере. 
                            Для примера мы решили продемонстрировать возможный функционал для сферы образования.'>
                        </CardWebAppsMobile>
                    </div>
                </div>
            </div>

        </section>

export default BlockWebApps