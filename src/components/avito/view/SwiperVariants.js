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
import RobotIco from '../../../assets/avito/Robot-icon.webp';
/**
 * Imports: blocks
 */
import CardVariants from "./CardVariants";
import Symbol from '../../common/view/Symbol';

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
        <CardVariants
          icon={RobotIco}
          title='Бот-автоответчик'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem,
           non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. 
           tiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero.
           Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.'
           price={<span><Symbol symbol='+' />10.000 <Symbol symbol='₽' /></span>}
          timing='1 день'
          />
      </SwiperSlide>

      <SwiperSlide>
        <CardVariants
          icon={RobotIco}
          title='Бот-автоответчик'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem,
           non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. 
           tiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero.
           Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.'
           price={<span><Symbol symbol='+' />10.000 <Symbol symbol='₽' /></span>}
          timing='1 день'
          />
      </SwiperSlide>


      <SwiperSlide>
        <CardVariants
          icon={RobotIco}
          title='Бот-автоответчик'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem,
           non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. 
           tiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero.
           Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.'
           price={<span><Symbol symbol='+' />10.000 <Symbol symbol='₽' /></span>}
          timing='1 день'
          />
      </SwiperSlide>

      <SwiperSlide>
        <CardVariants
          icon={RobotIco}
          title='Бот-автоответчик'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem,
           non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. 
           tiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero.
           Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.'
           price={<span><Symbol symbol='+' />10.000 <Symbol symbol='₽' /></span>}
          timing='1 день'
          />
      </SwiperSlide>


      <SwiperSlide>
        <CardVariants
          icon={RobotIco}
          title='Бот-автоответчик'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem,
           non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. 
           tiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero.
           Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.'
           price={<span><Symbol symbol='+' />10.000 <Symbol symbol='₽' /></span>}
          timing='1 день'
          />
      </SwiperSlide>


      <SwiperSlide>
        <CardVariants
          icon={RobotIco}
          title='Бот-автоответчик'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem,
           non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. 
           tiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero.
           Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.'
          price={<span><Symbol symbol='+' />10.000 <Symbol symbol='₽' /></span>}
          timing='1 день'
          />
      </SwiperSlide>
    

    </Swiper>
  );

}

export default Gallery;