/**
 * Imports : React
 */
import React from "react";

/**
 * Imports : media
 */
import { BsFillTelephoneFill } from 'react-icons/bs';
import IcBurger from '../../../assets/common/icons/IcBurger';

/**
 * Imports : custom components
 */
import Symbol from '../view/Symbol';
import DropdownMenu from "../view/DropdownMenu";
import ThemeSwitcher from "../view/ThemeSwitcher";
import DropdownMenuMobile from "../view/DropdownMenuMobile";
import NewMenu from '../view/NewMenu'

/**
 * Imports : Gatsby
 */
import { Link } from 'gatsby';

/**
 * Imports : scripts
 */
import { smoothToFeedback } from '../../../scripts/changeViewByIdScripts'

const Header = () => {    

  
    return (
        <>
            <header className={
            'relative py-[10px] flex justify-between items-center '
            + 'laptop:py-[30px] '
            + 'desktop:py-[60px] '} >

            <div className="flex items-center">

                <Link to='/'>
                    <div className={
                        'font-bold text-[30px] leading-[46px] '
                        + 'laptop:mr-14 laptop:text-[32px] laptop:leading-[48px]'}>

                        its.<span className="text-sky-500">dev</span>

                    </div>
                </Link>

                <nav className={
                    'hidden '
                    + 'laptop:block'}>

                    <ul className="flex items-center pt-[5px]">

                        <DropdownMenu
                            title="О компании"
                            items={[
                                {
                                    title: 'О нас',
                                    link: '/'
                                },
                                {
                                    title: 'Вакансии и карьера',
                                    link: '/underDevelopment'
                                }
                            ]} />
                        <DropdownMenu
                            title="Услуги"
                            items={[
                                {
                                    title: 'Телеграм разработка',
                                    link: '/bots/telegram'
                                },
                                {
                                    title: 'Авито разработка',
                                    link: '/bots/avito'
                                },
                                {
                                    title: 'Инстаграм разработка',
                                    link: '/bots/instagram'
                                },
                                {
                                    title: 'ВКонтакте разработка',
                                    link: '/bots/instagram'
                                },

                            ]} />
                        <DropdownMenu
                            title="Решения"
                            items={[
                                {
                                    title: 'Bot System',
                                    link: '/underDevelopment'
                                }
                            ]} />
                    </ul>

                </nav>

            </div>


            <div className="flex">

                <div className={
                    'hidden laptop:flex laptop:items-center '
                    + 'font-bold'}>

                    <BsFillTelephoneFill className="text-sky-500 w-[25px] aspect-square mx-[10px]" />

                    <a
                        href="tel:88001015228"
                        className="mr-[52px]">
                        8 <Symbol symbol="(" />800<Symbol symbol=")" /> 101-52-28
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

        </ header>

<NewMenu/>
        </>
    
    );

}

export default Header;