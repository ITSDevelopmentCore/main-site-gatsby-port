/**
 * Imports : React
 */
import React, { useState, useEffect } from 'react';

/**
 * Imports : media
 */
import { BsFillTelephoneFill } from 'react-icons/bs'
import IcBurger from '../../../assets/common/icons/IcBurger'

/**
 * Imports : custom components
 */
import Symbol from '../view/Symbol'
import ThemeSwitcher from '../view/ThemeSwitcher'
import MenuMobile from '../view/MenuMobile'
import Menu from '../view/Menu'

/**
 * Imports : Gatsby
 */
import { Link } from 'gatsby';

/**
 * Imports : scripts
 */
import { smoothToFeedback } from '../../../scripts/changeViewByIdScripts'

const Header = () => {

    const [isMenuVisible, setMenuVisible] = useState(false)
    const [menuCategories, setMenuCategories] = useState(null)
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    });

    const handleScroll = () => {
        setSticky(window.pageYOffset > 0);
        setMenuVisible(false)
        setMenuCategories(null)
    }

    const navigationClickCallback = (menu) => {
        setMenuVisible(!isMenuVisible)
        setMenuCategories(menu)
    }

    const menuServices = [
        {
            name: 'Web разработка',
            subcategories: ['Сайты', 'Сервисы', 'Высоконагруженные системы'],
            links: ['/underDevelopment', '/underDevelopment', '/underDevelopment']
        },
        {
            name: 'Мобильная разработка',
            subcategories: ['Android', 'IOS', 'Crossplatform'],
            links: ['/underDevelopment', '/underDevelopment', '/underDevelopment']
        },
        {
            name: 'Боты',
            subcategories: ['Телеграм', 'Avito', 'Инстаграм', 'Вконтакте'],
            links: ['/bots/telegram', '/bots/avito', '/bots/instagram', '/bots/vkontakte']
        },
        {
            name: 'Консалтинг',
            subcategories: ['Цифровизация бизнеса', 'Аудит IT экосистемы', 'Поддержка стартапов'],
            links: ['/underDevelopment', '/underDevelopment', '/underDevelopment']
        },
    ];

    const menuAbout = [
        {
            name: 'О нас',
            subcategories: ['Команда', 'Вакансии'],
            links: ['/underDevelopment', '/underDevelopment', '/underDevelopment'],
        }
    ];

    return (
        <>
            <header className={
                `relative mb-[30px] flex justify-between items-center `
                + `transition-all duration-200 rounded-[10px] `
                + `${isSticky ? `bg-white dark:bg-gray-700 sticky top-[20px] z-30 py-[10px] shadow-2xl` : `py-[30px]`}`} >

                <div className='flex items-center px-[30px]'>

                    <Link to='/'>
                        <div className={
                            'font-bold text-[30px] leading-[46px] '
                            + 'laptop:mr-14 laptop:text-[32px] laptop:leading-[48px]'}>
                            its.<span className='text-sky-500'>dev</span>
                        </div>
                    </Link>

                    <nav className={
                        'h-full hidden '
                        + 'laptop:flex '}>

                        <button
                            className='cursor-pointer flex font-bold p-[20px] dark:hover:bg-gray-600 hover:bg-gray-200 rounded-[10px]'
                            onClick={() => navigationClickCallback(menuAbout)}  >
                            О нас
                        </button>

                        <button
                            className='cursor-pointer flex font-bold p-[20px] dark:hover:bg-gray-600 hover:bg-gray-200 rounded-[10px]'
                            onClick={() => navigationClickCallback(menuServices)}>
                            Услуги
                        </button>

                    </nav>

                </div>


                <div className='flex px-[30px]'>

                    <div className={
                        'hidden laptop:flex laptop:items-center '
                        + 'font-bold'}>

                        <BsFillTelephoneFill className='text-sky-500 w-[25px] aspect-square mx-[10px]' />

                        <a
                            href='tel:88001015228'
                            className='mr-[52px]'>
                            8 <Symbol symbol='(' />800<Symbol symbol=')' /> 101-52-28
                        </a>

                        <button
                            onClick={smoothToFeedback}
                            className={
                                'py-[12px] px-[20px] '
                                + 'text-inherit btn btn-active rounded-lg bg-sky-500 hover:bg-sky-400 border-none transition-all normal-case'}>
                            Связаться с нами
                        </button>

                    </div>

                    <div className={'hidden large:flex items-center ml-[56px]'}>
                        <ThemeSwitcher />
                    </div>

                    <IcBurger />

                    <MenuMobile
                        categories={[...menuServices, ...menuAbout]} />

                </div>

                {isMenuVisible && (<Menu categories={menuCategories} />)}

            </ header>
        </>
    );
}

export default Header;