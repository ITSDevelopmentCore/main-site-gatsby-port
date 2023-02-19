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
 * Imports: blocks
 */
import CardPrice from "./CardPrice";
import Symbol from '../../common/view/Symbol';

function SwiperPrices() {

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
      slidesPerView={1.05}
      pagination={pagination}
      modules={[Pagination]}>

      <SwiperSlide>
        <CardPrice
          title='Бот-автоответчик'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem,
           non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. 
           tiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero.
           Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.'
           price={<span>10.000 <Symbol symbol='Р' /></span>}
          timing='1 день'
          />
      </SwiperSlide>

      <SwiperSlide>
        <CardPrice
          title='Бот-автоответчик'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem,
           non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. 
           tiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero.
           Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.'
           price={<span>10.000 <Symbol symbol='Р' /></span>}
          timing='1 день'
          />
      </SwiperSlide>


      <SwiperSlide>
        <CardPrice
          title='Бот-автоответчик'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem,
           non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. 
           tiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero.
           Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.'
           price={<span>10.000 <Symbol symbol='Р' /></span>}
          timing='1 день'/>
      </SwiperSlide>

      <SwiperSlide>
        <CardPrice
          title='Бот-автоответчик'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem,
           non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. 
           tiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero.
           Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.'
           price={<span>10.000 <Symbol symbol='Р' /></span>}
          timing='1 день'/>
      </SwiperSlide>


      <SwiperSlide>
        <CardPrice
          title='Бот-автоответчик'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem,
           non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. 
           tiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero.
           Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.'
           price={<span>10.000 <Symbol symbol='Р' /></span>}
          timing='1 день'/>
      </SwiperSlide>


      <SwiperSlide>
        <CardPrice
          title='Бот-автоответчик'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem,
           non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. 
           tiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero.
           Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.'
           price={<span>10.000 <Symbol symbol='Р' /></span>}
          timing='1 день'/>
      </SwiperSlide>
    

    </Swiper>
  );

}

export default SwiperPrices;