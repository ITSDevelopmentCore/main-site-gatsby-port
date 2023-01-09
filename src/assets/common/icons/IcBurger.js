/**
 * Imports : React
 */
import { ThemeContext } from '../../../layouts/index';
import React, { useContext } from 'react'

/**
 * Imports : Scripts
 */
import { showMobileMenu, hideMobileMenu } from "../../../scripts/changeViewByIdScripts";

export default function IcBurger() {

    const { theme } = useContext(ThemeContext)

    function clickHandler() {
        if (document.getElementById('dropdownMenuMobile').classList.contains('hidden')) {
            showMobileMenu();
        }
        else {
            hideMobileMenu();
        }
    }
    return (
        <label className={
            'swap swap-rotate '
            + 'laptop:hidden '}>

            <input type="checkbox" onChange={() => clickHandler()}/>
            <svg className="swap-off" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                <path fill="#0ea5e9" d="M64,128 H448 V87 H64 Z" />
                <path fill={theme === 'dark' ? '#ffffff' : '#171717'} d="M64,248 H448 V203 H64 Z" />
                <path fill={theme === 'dark' ? '#ffffff' : '#171717'} d="M64,384 H448 V341 H64 Z" />
            </svg>
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

        </label>

    )

}
