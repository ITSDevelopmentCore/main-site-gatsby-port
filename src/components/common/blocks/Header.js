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
 * Imports : components
 */
import Symbol from '../view/Symbol';
import DropdownMenu from "../view/DropdownMenu";
import ThemeSwitcher from "../view/ThemeSwitcher";
import DropdownMenuMobile from "../view/DropdownMenuMobile";


function Header() {

    const buttonClickHandler = () => {
        document.getElementById('feedback').scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <header className={
            'py-[10px] flex justify-between items-center '
            + 'laptop:py-[30px] '
            + 'desktop:py-[60px] '} >

            <div className="flex items-center">

                <div className={
                    'font-bold text-[30px] leading-[46px] '
                    + 'laptop:mr-14 laptop:text-[32px] laptop:leading-[48px]'}>
                    its.<span className="text-sky-500">dev</span>
                </div>

                <nav className={
                    'hidden '
                    + 'laptop:block'}>

                    <ul className="flex items-center pt-[5px]">

                        <DropdownMenu
                            title="О компании"
                            items={[
                                {
                                    title: "О нас",
                                    link: "http://127.0.0.1:5500/build/html/home.html"
                                },
                                {
                                    title: "Вакансии и карьера",
                                    link: "http://127.0.0.1:5500/build/html/development.html"
                                }
                            ]} />
                        <DropdownMenu
                            title="Услуги"
                            items={[
                                {
                                    title: "Telegram",
                                    link: "http://127.0.0.1:5500/build/html/telegram.html"
                                },
                                {
                                    title: "Мобильная разработка",
                                    link: "http://127.0.0.1:5500/build/html/development.html"
                                },
                                {
                                    title: "Web разработка",
                                    link: "http://127.0.0.1:5500/build/html/development.html"
                                },
                                {
                                    title: "Startup MVP",
                                    link: "http://127.0.0.1:5500/build/html/development.html"
                                },
                            ]} />
                        <DropdownMenu
                            title="Решения"
                            items={[
                                {
                                    title: "Bot System",
                                    link: "http://127.0.0.1:5500/build/html/development.html"
                                }
                            ]} />
                    </ul>

                </nav>

            </div>


            <div className="flex">

                <div className={
                    'hidden laptop:flex laptop:items-center '
                    + 'font-bold'}>

                    <BsFillTelephoneFill className="text-sky-500 w-6 h-6 mr-2" />

                    <a href="tel:89122486136"
                        className="mr-[52px]">
                        <Symbol symbol="+" />
                        7
                        <Symbol symbol=" " />
                        <Symbol symbol="(" />
                        999
                        <Symbol symbol=")" />
                        <Symbol symbol=" " />
                        999-99-99
                    </a>

                    <button
                        onClick={buttonClickHandler}
                        className="text-[14px] laptop:text-[16px] large:text-[18px] btn btn-active rounded-lg bg-sky-500 text-white py-3 px-5 hover:bg-sky-400 border-none transition-all normal-case">
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
    );

}

export default Header;