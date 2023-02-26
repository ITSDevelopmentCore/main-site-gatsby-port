/**
 * Imports : React
 */
import React from "react";

/**
 * Imports: Swiper library
 */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

/**
 * Imports: blocks
 */
import CardPrice from "../commons/CardPrice";

const SwiperPrices = () =>
  <Swiper
    breakpoints={{
      1550: {
        slidesPerView: 3.5,
      },
      1450: {
        slidesPerView: 3.2,
      },
      1350: {
        slidesPerView: 2.9,
      },
      1250: {
        slidesPerView: 2.6,
      },
      1024: {
        slidesPerView: 2.3,
      },
    }}
    slidesPerView={1.05}>

    <SwiperSlide >
      <CardPrice
        title='Бот-автоответчик'
        description='Бот - автоответчик, моментально отвечающий всем клиентам в любое время суток, что в разы повышает вероятность конверсии. В ночное и нерабочее
          время бот способен отвечать различными сообщениями'
        price='3 900'
        timing='1 день' />
    </SwiperSlide>

    <SwiperSlide>
      <CardPrice
        title='Бот-консультант'
        description='Бот способен консультировать клиентов по любым вопросам и выполнять все функции автоответчика, разгружая оператора и позволяя автоматизировать продажи. 
          9 из 10 клиентов пробуют контактировать с другим продавцом, если первый не ответил им моментально'
        price='от 4 900'
        timing='1-3 дня' />
    </SwiperSlide>

    <SwiperSlide>
      <CardPrice
        title='Автоматизированная система для ВКонтакте'
        description='Разработка системы для автоматизации работы продавца ВКонтакте. Наши системы интегрируются с Вконтакте всеми возможными способами, предоставляя возможность 
          автозагрузки объявлений, получения расширенной статистики, анализ статистики, работу с группой и публикациями.'
        price='от 29 000'
        timing='от 7 дней' />
    </SwiperSlide>

    <SwiperSlide>
      <CardPrice
        title='Комплексный бот'
        description='Бот создан для выполнения нестандартных сценариев. 
          К примеру - сложные интеграции с автоматизированными системами, выполнение пользовательских скриптов, комплексный диалог с клиентом'
        price='от 9 000'
        timing='1 день' />
    </SwiperSlide>

    <SwiperSlide>
      <CardPrice
        title='Бот с интеграциями'
        description='Бот выполняет все функции консультанта и автоответчика и способен интегрироваться с любыми внешними сервисами продавца. Будь то CRM система, 
          мессенджеры операторов, или другая система автоматизации'
        price='от 8 900'
        timing='2-5 дней' />
    </SwiperSlide>

  </Swiper>


export default SwiperPrices;