/**
 * Imports : React
 */
import React from "react";

/**
 * Imports : Swiper
 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

/**
 * Imports : components
 */
import CardWebApp from "./CardWebApp";

/**
 * Imports : medias
 */
import QrBusiness from '../../assets/media/qr_business.jpg';
import ScreenshotBusiness from '../../assets/media/screenshot_web-app_business.png';
import QrCoffee from '../../assets/media/qr_coffee.jpg';
import ScreenshotCoffee from '../../assets/media/screenshot_web-app_food.png';
import QrEcom from '../../assets/media/qr_ecom.jpg';
import ScreenshotEcom from '../../assets/media/screenshot_web-app_ecom.png';
import QrService from '../../assets/media/qr_service.jpg';
import ScreenshotService from '../../assets/media/screenshot_web-app_service.png';
import QrEducation from '../../assets/media/qr_education.jpg';
import ScreenshotEducation from '../../assets/media/screenshot_web-app_education.png';



export default function Gallery() {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="w-8 h-8 bg-sky-500 rounded-[5px] ' + className + '"></span>';
    },
  };

  return (
    <Swiper
      className={'hidden laptop:block'}
      effect={"coverflow"}
      autoHeight={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 700,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={pagination}
      modules={[EffectCoverflow, Pagination]}
    >
      <SwiperSlide>
        <CardWebApp
          title='Сфера услуг'
          description='Демонстрационный бот для демонстрации возможностей Telegram Web Apps в сфере услуг. 
          Мы разрабатываем уникальный дизайн, соответствующий Вашим пожеланиям и стилистике бренда, но в то же время имеем солидное количество шаблонов, 
          которые позволяют нам создавать Telegram ботов еще быстрее и дешевле. 
          Наши демонстрационные боты созданы что бы показать возможности TWA, фактический вид и функционал отличается в каждом индивидуальном случае.'
          qr={QrService}
          image={ScreenshotService}
          link='https://t.me/its_demo_services_bot' />
      </SwiperSlide>
      <SwiperSlide>
        <CardWebApp
          title='E-commerce'
          description='Демонстрационный бот для демонстрации возможностей Telegram Web Apps в сфере E-Commerce. 
          Мы удовлетворяем все Ваши потребности в E-Commerce внутри Telegram, интегрируя все необходимые платежные и CRM системы. 
          Наши демонстрационные боты созданы что бы показать возможности TWA, фактический вид и функционал отличается в каждом индивидуальном случае.'          
          qr={QrEcom}
          image={ScreenshotEcom}
          link='https://t.me/its_demo_shop_bot' />     
      </SwiperSlide>
      <SwiperSlide>
        <CardWebApp
          title='Корпоративные боты'
          description='Демонстрационный бот для демонстрации возможностей Telegram Web Apps в сфере корпоративных приложений. 
          Данные боты являются идеальным решением, когда нужно закрыть, или автоматизировать внутренние корпоративные бизнес процессы. 
          Мы проводим интеграции со всеми требуемыми системами компании.'             
          qr={QrBusiness}
          image={ScreenshotBusiness}
          link='https://t.me/its_demo_route_bot' /> 
      </SwiperSlide>
      <SwiperSlide>
        <CardWebApp
          title='Food tech'
          description='Демонстрационный бот для демонстрации возможностей Telegram Web Apps в сфере Food tech. 
          Мы создаем ботов, которые могут стать вашим любимым и в определенных нишах лучшим решением для удержания клиентов и превращения их в постоянных. 
          Food tech сфера является одной из таких. '    
          qr={QrCoffee}
          image={ScreenshotCoffee}
          link='https://t.me/its_demo_food_bot' />      
        </SwiperSlide>
        <SwiperSlide>
        <CardWebApp
          title='Сфера образования'
          description='Боты с Telegram Web Apps могут стать самым эффективным решением проблем в любой сфере. 
          Для примера мы решили продемонстрировать возможный функционал для сферы образования.'
          qr={QrEducation}
          image={ScreenshotEducation}
          link='https://t.me/its_demo_education_bot' />      
        </SwiperSlide>

    </Swiper>
  );
}