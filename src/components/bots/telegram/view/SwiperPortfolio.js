/**
 * Imports : React
 */
import React from "react";

/**
 * Imports: Swiper library
 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/pagination';

/**
 * Imports: media
 */
import ScreenshotPortfolio1 from "../../../../assets/telegram/screenshot_portfolio_1.webp";
import ScreenshotPortfolio2 from "../../../../assets/telegram/screenshot_portfolio_2.webp";
import ScreenshotPortfolio3 from "../../../../assets/telegram/screenshot_portfolio_3.webp";
import ScreenshotPortfolio4 from "../../../../assets/telegram/screenshot_portfolio_4.webp";
import QrPorftolio1 from '../../../../assets/telegram/qr_portfolio_1.webp';
import QrPorftolio2 from '../../../../assets/telegram/qr_portfolio_2.webp';
import QrPorftolio3 from '../../../../assets/telegram/qr_portfolio_3.webp';
import QrPorftolio4 from '../../../../assets/telegram/qr_portfolio_4.webp';

/**
 * Imports: blocks
 */
import CardPortfolio from "./CardPortfolio";
import Symbol from '../../../common/view/Symbol';

function Gallery() {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="w-8 h-8 bg-sky-500 rounded-[5px] ' + className + '"></span>';
    },
  };

  return (

    <Swiper
      breakpoints={{
        1550: {
          slidesPerView: 1.8,
        },
        1450: {
          slidesPerView: 1.65,
        },
        1350: {
          slidesPerView: 1.55,
        },
        1250: {
          slidesPerView: 1.45,
        },
        1024: {
          slidesPerView: 1.2,
        },
      }}
      autoHeight={true}
      slidesPerView={1.05}
      pagination={pagination}
      modules={[Pagination]}>


      <SwiperSlide>
        <CardPortfolio
          title='Softwareshop'
          description='Бот - магазин программного обеспечения'
          budget={<span>50.000 <Symbol symbol='₽' /></span>}
          result={<span>50.000 <Symbol symbol='₽' /></span>}
          screenshot={ScreenshotPortfolio4}
          qr={QrPorftolio4} 
          link='https://t.me/software_shop'/>
      </SwiperSlide>

      <SwiperSlide>
        <CardPortfolio
          title='SMM Бот'
          description='Бот для сервиса продвижений в социальных сетях'
          budget={<span>50.000 <Symbol symbol='₽' /></span>}
          result={<span>30.000 <Symbol symbol='₽' /></span>}
          screenshot={ScreenshotPortfolio3}
          qr={QrPorftolio3} 
          link='https://t.me/Nakrutka_Artemkabot'/>
      </SwiperSlide>

      <SwiperSlide>
        <CardPortfolio
          title='Andy'
          description='Бот для частной школы английского языка'
          budget={<span>40.000 <Symbol symbol='₽' /></span>}
          result={<span>20.000 <Symbol symbol='₽' /></span>}
          screenshot={ScreenshotPortfolio1}
          qr={QrPorftolio1} 
          link='https://t.me/AndyRobot'/>
      </SwiperSlide>

      <SwiperSlide>
        <CardPortfolio
          title='Banksman'
          description='Бот - для сервиса по безопасному обмену валют'
          budget={<span>90.000 <Symbol symbol='₽' /></span>}
          result={<span>70.000 <Symbol symbol='₽' /></span>}
          screenshot={ScreenshotPortfolio2}
          qr={QrPorftolio2} 
          link='https://t.me/Baksman_wallet_bot'/>
      </SwiperSlide>

    </Swiper>
  );

}

export default Gallery;