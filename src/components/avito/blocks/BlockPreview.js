/**
 * Imports : React
 */
import React, { useContext } from "react";
import { ThemeContext } from '../../../layouts/index';

/**
 * Imports : Media
 */
import { StaticImage } from "gatsby-plugin-image";
import IllustrationAvitoPreviewLight from '../../../assets/avito/illustration_preview-light.webp';
import IllustrationAvitoPreviewDark from '../../../assets/avito/illustration_preview-dark.webp';
import IcYandexCloud from '../../../assets/avito/icons/ic_yandex-cloud.webp';
import Symbol from '../../common/view/Symbol';

export default function BlockPreview() {
  const { theme } = useContext(ThemeContext)


  const buttonClickHandler = () => {
    document.getElementById('feedback').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className={'mt-[50px] mb-[240px]'}>

      <div className={'flex flex-col '
        + 'laptop:flex-row laptop:space-x-[80px]'}>

        <div className={'basis-1/2 flex flex-col justify-between'}>

          <h1
            className={
              'text-white font-extrabold text-center text-[35px] leading-[45px] '
              + 'laptop:text-[50px] laptop:leading-[60px] laptop:text-left '
              + 'large:text-[70px] large:leading-[80px] '
              + 'desktop:text-[80px] desktop:leading-[90px]'}>
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
            className={
              'my-[25px] '
              + 'text-center '
              + 'laptop:text-white laptop:text-start laptop:my-0'}>
            Боты для Авито являются обязательным инструментом для продаж.
            Боты для Avito автоматизируют ваши продажи и отвечают клиенту 24<Symbol symbol='/' />7, интегрируясь со всеми CRM
            и прочими сервисами, экономя десятки часов предпринимателя и повышая конверсию объявлений в разы.
          </p>


          <div className={'my-[25px] flex flex-col space-y-[25px] '
            + 'laptop:flex-row laptop:space-x-[25px] laptop:my-0 laptop:space-y-0'}>

            <button
              onClick={buttonClickHandler}
              className={'button '
                + 'font-bold bg-white rounded-xl text-sky-500 border-2 border-white transition-all duration-200 '
                + 'hover:text-white hover:bg-transparent '}>
              Свяжитесь со мной
            </button>

            <a
              className={'button '
              + 'font-bold border-2 border-sky-500 rounded-xl text-sky-500 text-center transition-all duration-200 '
              + 'hover:border-white hover:text-white '}
              href='https://www.avito.ru/moskva/predlozheniya_uslug/razrabotka_chat-botov._telegram_avito_vkontakte_2743395912'>
              <button>
                Быстрый обзор
              </button>
            </a>

          </div>

          <div className={'flex p-[15px] space-x-[20px] '
            + 'bg-white rounded-xl '
            + 'laptop:w-fit '
            + 'large:p-[17px] '
            + 'desktop:p-[20px]'}>
            <img
              src={IcYandexCloud}
              alt={"Знак партнерства с ООО Яндекс Облако"} />
            <p className='my-auto text-black'>Официальный партнер <br /> ООО Яндекс Облако</p>
          </div>

        </div>

        <div className={'my-[40px] basis-1/2 '
          + 'large:my-0'}>
            
            {theme === 'dark' ?
          <StaticImage
            className='mx-auto '
            placeholder="blurred"
            src='../../../assets/avito/illustration_preview-dark.webp'
            alt='Окно с работающим ботом для авито' />
            :
            <StaticImage
            className='mx-auto '
            placeholder="blurred"
            src='../../../assets/avito/illustration_preview-light.webp'
            alt='Окно с работающим ботом для авито' />
            }
        </div>

      </div>

    </section>
  );
}

