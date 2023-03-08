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
import DropdownMenuMobile from '../view/MenuMobile'
import MainMenu from '../view/Menu'

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

    const handleScroll = () => setSticky(window.pageYOffset > 0);
      
    const navigationClickCallback = (menu) => {
        setMenuVisible(!isMenuVisible)
        setMenuCategories(menu)
    }

    const menuServices = [
        {
            name: 'Разработка ботов',
            subcategories: ['Коллектив', 'Награды', 'Расположение'],
        },
        {
            name: 'Карьера',
            subcategories: ['Clothing', 'Shoes', 'Accessories'],
        },
        {
            name: 'Kids',
            subcategories: ['Boys', 'Girls', 'Babies'],
        },
        {
            name: 'Home',
            subcategories: ['Bedding', 'Bath', 'Kitchen'],
        },
    ];

    const menuAbout = [
        {
            name: 'О нас',
            subcategories: [
                <Link to='/underDevelopment'>
                    Вакансии и карьера
                </Link>
            ],
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
                        'h-full '
                        + 'laptop:flex '}>

                        <button
                            className='cursor-pointer flex font-bold p-[20px] hover:bg-sky-50 rounded-[10px]'
                            onClick={() => navigationClickCallback(menuAbout)}  >
                            О нас
                        </button>

                        <button
                            className='cursor-pointer flex font-bold p-[20px] hover:bg-sky-50 rounded-[10px]'
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

                    <DropdownMenuMobile />

                </div>

                {isMenuVisible && (<MainMenu categories={menuCategories} />)}

            </ header>
        </>
    );
}

export default Header;