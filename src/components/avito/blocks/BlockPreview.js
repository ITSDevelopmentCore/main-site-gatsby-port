/**
 * Imports : React
 */
import React from 'react';
import Symbol from '../../common/view/Symbol';

/**
 * Imports : Media
 */
import AvitoPrewCom from '../../../assets/avito/illustration_preview-light.webp';
import YandexPartner from '../../../assets/avito/Yandex_partner_btn.webp';

export default function BlockPreview() {

  const buttonClickHandler = () => {
    document.getElementById('feedback').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className={
        'mt-[100px] mb-[110px] ' + 
    'laptop:mb-[220px]'}>
      <div
        className={
          'block ' + 
          'laptop:flex laptop:items-center laptop:justify-between'
        }>
        <div
          className={
            'flex flex-col justify-center basis-1/2 mb-[240px] large:min-w-[670px]'
          }>
          <h1
            className={
              'font-extrabold text-center text-white text-[35px] leading-[45px] mb-[44px] ' +
              'laptop:text-[50px] laptop:leading-[55px] laptop:text-left ' +
              'large:text-[75px] large:leading-[85px] ' +
              'desktop:text-[95px] desktop:leading-[105px]'
            }>
            Разработка
            <br />
            <span
              className={
                'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500'
              }>
              ботов
              <span className='text-white ml-[15px]'>для</span>
              <span className='ml-[15px]'>Avito</span>
            </span>
          </h1>

          <p
            className='mb-[60px] text-white 
                         text-center
                        desktop:leading-[34px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <span className='space-x-7 mb-[48px]'>
            <button
              onClick={buttonClickHandler}
              className={
                'py-[19px] px-[46px] w-max mx-auto -mb-[80px] ' +
                ' font-bold  bg-white border-[2px] border-white rounded-xl text-sky-500 hover:text-white hover:bg-transparent transition-all duration-200  ' +
                'desktop:text-[22px] desktop:leading-[33px] ' +
                'dark:to-sky-500'
              }>
              Свяжитесь со мной
            </button>

            {/* Везде убираем все tailwind классы, относящиеся к адаптивам. Оставляем только десктоп. */}
            {/* Тут по кнопке редирект на наше объявление Авито Москва. */}
            <button
              onClick={buttonClickHandler}
              className={
                'py-[19px] px-[46px] w-max mx-auto -mb-[80px] ' +
                'leading-[30px] font-bold bg-white border-[2px] border-white rounded-xl text-sky-500 hover:text-white hover:bg-transparent transition-all duration-200' +
                'desktop:text-[22px] desktop:leading-[33px] '
              }>
              Быстрый обзор
            </button>
          </span>

          {/* Переделать в комплексный элемент, это не изображение.  */}
          {/* alt атрибуты на русском, что бы было понятно, что на изображении. (Знак партнерства с ООО "Яндекс Облако") Можно посмотреть примеры в других страничках */}
          <img
            src={YandexPartner}
            alt='Знак партнерства с ООО "Яндекс Облако"'
            className={'h-full w-[45%]'}
          />
        </div>

{/* Прошу еще раз ознакомиться с тем, что я писал в описании в трелло, там было указано, какой ширины мы делаем изображение и остальной контент. 50x50, без фиксированной ширины */}
        <img
          src={AvitoPrewCom}
          alt='Компьютер с примером бота авито'
          className={'h-full w-[50%]'}
        />
      </div>
    </section>
  );
}
