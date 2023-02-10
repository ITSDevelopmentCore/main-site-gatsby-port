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
      'mt-[100px] mb-[110px] '}>
      <div
        className={
          'flex justify-center basis-1/2'
        }>
        <div
          className={
            'flex flex-col justify-center basis-1/2 '
          }>
          <h1
            className={
              'font-extrabold text-white text-[35px] leading-[45px] mb-[67px] ' +
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
                        desktop:leading-[34px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <span className='space-x-7 mb-[48px]'>
            <button
              onClick={buttonClickHandler}
              className={
                'py-[19px] px-[46px] w-max mx-auto  ' +
                ' font-bold  bg-white border-[2px] border-white rounded-xl text-sky-500 hover:text-white hover:bg-transparent transition-all duration-200  ' +
                'desktop:text-[22px] desktop:leading-[33px] ' +
                'dark:to-sky-500'
              }>
              Свяжитесь со мной
            </button>

            <a href='https://www.avito.ru/moskva/predlozheniya_uslug/razrabotka_chat-botov._telegram_avito_vkontakte_2743395912'>
              <button
                className={
                  'py-[19px] px-[46px] w-max mx-auto  ' +
                  'leading-[30px] font-bold bg-white border-[2px] border-white rounded-xl text-sky-500 hover:text-white hover:bg-transparent transition-all duration-200' +
                  'desktop:text-[22px] desktop:leading-[33px] '
                }>
                Быстрый обзор
              </button>
            </a>
          </span>

          <img
          src={YandexPartner}
          alt='Официальный партнер 
          ООО "Яндекс Облако'
          className={'h-full w-[50%] '}
        />

        </div>

        <img
          src={AvitoPrewCom}
          alt='Компьютер с примером бота авито'
          className={'h-full w-[43%] ml-[10%] mt-[2%]'}
        />
      </div>
    </section>
  );
}
