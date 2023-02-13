/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports : Media
 */
import IllustrationAvitoPreview from '../../../assets/avito/illustration_preview-light.webp';
import IconYandexPartner from '../../../assets/avito/Yandex_partner_btn.webp';

export default function BlockPreview() {

  const buttonClickHandler = () => {
    document.getElementById('feedback').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      className={'mt-[70px] mb-[70px]'}>

      <div
        className={'flex space-x-[10%]'}>

        <div
          className={'basis-1/2 flex flex-col justify-around'}>

          <h1
            className={
              'text-white font-extrabold text-center text-[35px] leading-[45px] mb-[45px] '
              + 'laptop:text-[50px] laptop:leading-[55px] laptop:text-left '
              + 'large:text-[75px] large:leading-[85px] '
              + 'desktop:text-[95px] desktop:leading-[105px]'}>
            Разработка
            <br />
            <span className={'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500'}>
              ботов
            </span>
            <span> для </span>
            <span className={'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500'}>
              Авито
            </span>
          </h1>

          <p
            className={'mb-[60px] '
              + 'text-white text-[22px]'}>
            Боты для Авито являются обязательным инструментом для продаж.
            Боты для Avito автоматизируют ваши продажи и отвечают клиенту 24/7, интегрируясь со всеми CRM
            и прочими сервисами, экономя десятки часов предпринимателя и повышая конверсию объявлений в разы.
          </p>


          <div className={'flex'}>

            <button
              onClick={buttonClickHandler}
              className={
                'py-[20px] px-[45px] '
                + 'font-bold bg-white rounded-xl text-sky-500 '
                + 'desktop:text-[22px] desktop:leading-[33px] '
                + 'dark:to-sky-500'}>
              Свяжитесь со мной
            </button>

            <a
              href='https://www.avito.ru/moskva/predlozheniya_uslug/razrabotka_chat-botov._telegram_avito_vkontakte_2743395912'>
              <button
                className={
                  'py-[20px] px-[45px] '
                  + 'font-bold border-[2px] border-white rounded-xl text-sky-500 '
                  + 'desktop:text-[22px] desktop:leading-[33px]'}>
                Быстрый обзор
              </button>
            </a>

          </div>

          <img
            src={IconYandexPartner}
            alt='Официальный партнер ООО "Яндекс Облако'
            className={'h-full w-[50%]'} />

        </div>

        <div className={'basis-1/2'}>
          <img
            src={IllustrationAvitoPreview}
            alt='Окно с работающим ботом для авито' />
        </div>

      </div>

    </section>
  );
}
