/**
 * Imports : React
 */
import React, { useContext } from 'react'
import { ThemeContext } from '../../../layouts/index'
import { StaticImage } from 'gatsby-plugin-image'

/**
 * Imports : media
 */
import IcYandexCloud from '../../../assets/avito/icons/ic_yandex-cloud.webp'
import Symbol from '../../common/view/Symbol'

/**
 * Imports : scripts
 */
import { smoothToFeedback } from '../../../scripts/changeViewByIdScripts'

const BlockPreview = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <section className={'section'}>

      <div className={'flex flex-col items-stretch '
        + 'laptop:flex-row laptop:space-x-[80px]'}>

        <div className={'basis-1/2 flex flex-col space-y-[40px]'}>

          <h1
            className={
              'text-white font-extrabold text-center text-[35px] leading-[45px] '
              + 'laptop:text-[50px] laptop:leading-[60px] laptop:text-left '
              + 'large:text-[70px] large:leading-[80px] '
              + 'desktop:text-[80px] desktop:leading-[90px]'}>
            Разработка
            <span className={'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500'}> ботов</span>
            <span> для </span>
            <span className={'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500'}>
              ВКонтакте
            </span>
          </h1>

          <p
            className={
              + 'text-center '
              + 'laptop:text-white laptop:text-start laptop:my-0'}>
            Боты для Вконтакте являются обязательным инструментом для продаж.
            Боты для Вконтакте автоматизируют ваши продажи и отвечают клиенту 24<Symbol symbol='/' />7, интегрируясь со всеми CRM
            и прочими сервисами, экономя десятки часов предпринимателя и повышая конверсию объявлений в разы.
          </p>


          <div className={'flex flex-col space-y-[25px] '
            + 'laptop:flex-row laptop:space-x-[25px] laptop:my-0 laptop:space-y-0'}>

            <button
              onClick={smoothToFeedback}
              className={'button '
                + 'font-bold bg-white rounded-xl text-sky-500 border-2 border-white transition-all duration-200 '
                + 'hover:text-white hover:bg-transparent '}>
              Свяжитесь со мной
            </button>

            <a
              className={'button '
                + 'font-bold border-2 border-sky-500 rounded-xl text-sky-500 text-center transition-all duration-200 '
                + 'hover:border-white hover:text-white '}
              href='https://vk.com/biz/article/vidzhety-i-chat-boty'>
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
            <p className='my-auto text-black'>
              Официальный партнер <br /> ООО Яндекс Облако
            </p>
          </div>

        </div>

        <div className={'my-[40px] grow h-full flex justify-center items-center '
          + 'laptop:my-200px'}>

          {theme === 'dark' ?

            <StaticImage
              height={450}
              placeholder='blurred'
              src='../../../assets/vkontakte/illustration_preview-dark.png'
              alt='Окно с работающим ботом для авито' />
            :
            <StaticImage
              height={450}
              placeholder='blurred'
              src='../../../assets/vkontakte/illustration_preview-light.png'
              alt='Окно с работающим ботом для авито' />}

        </div>

      </div>

    </section>
    
  );
}

export default BlockPreview