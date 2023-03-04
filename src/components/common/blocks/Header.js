/**
 * Imports : React
 */
import React, { useState } from "react";

/**
 * Imports : media
 */
import { BsFillTelephoneFill } from 'react-icons/bs';
import IcBurger from '../../../assets/common/icons/IcBurger';

/**
 * Imports : custom components
 */
import Symbol from '../view/Symbol';
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

    const menuServices = [
        {
            name: "О нас",
            subcategories: ["Коллектив", "Награды", "Расположение"],
        },
        {
            name: "Карьера",
            subcategories: ["Clothing", "Shoes", "Accessories"],
        },
        {
            name: "Kids",
            subcategories: ["Boys", "Girls", "Babies"],
        },
        {
            name: "Home",
            subcategories: ["Bedding", "Bath", "Kitchen"],
        },
    ];

    const menuAbout = [
        {
            name: "Women",
            subcategories: ["Clothing", "Shoes", "Accessories"],
        },
        {
            name: "Men",
            subcategories: ["Clothing", "Shoes", "Accessories"],
        },
        {
            name: "Kids",
            subcategories: ["Boys", "Girls", "Babies"],
        },
        {
            name: "Home",
            subcategories: ["Bedding", "Bath", "Kitchen"],
        },
    ];

    const menuSolutions = [
        {
            name: "Women",
            subcategories: ["Clothing", "Shoes", "Accessories"],
        },
        {
            name: "Men",
            subcategories: ["Clothing", "Shoes", "Accessories"],
        },
        {
            name: "Kids",
            subcategories: ["Boys", "Girls", "Babies"],
        },
        {
            name: "Home",
            subcategories: ["Bedding", "Bath", "Kitchen"],
        },
    ];


    const [isInnerVisible, setIsInnerVisible] = useState(false)
    const [menuCategories, setMenuCategories] = useState(null)

    const navigationClickCallback = (menu) => {
        setIsInnerVisible(true)
        setMenuCategories(menu)
    }

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
                        'h-full hidden space-x-[20px] '
                        + 'laptop:flex'}>

            
                            <button
                                className={'cursor-pointer font-bold bg-black'}
                                onClick={() => navigationClickCallback(menuAbout)}>
                                О нас
                            </button>

                            <button
                                className={'cursor-pointer font-bold bg-black'}
                                onClick={() => navigationClickCallback(menuServices)}>
                                Услуги
                            </button>

                            <button
                                className={'cursor-pointer font-bold bg-black'}
                                onClick={() => navigationClickCallback(menuSolutions)}>
                                Ришэния
                            </button>


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

                {isInnerVisible && (
                    <NewMenu
                        categories={menuCategories} />
                )}
            </ header>


        </>

    );

}

export default Header;