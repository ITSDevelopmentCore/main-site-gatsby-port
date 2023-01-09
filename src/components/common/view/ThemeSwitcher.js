import React, { useContext } from "react"
import { ThemeContext } from "../../components/blocks/Page";

/**
 * Imports : Media
 */
import { BsMoonStarsFill } from 'react-icons/bs';

export default function ThemeSwitcher() {

	const { changeThemeCallback } = useContext(ThemeContext);

    return (
        <div className="flex items-center">

            <label className="inline-flex relative items-center cursor-pointer mr-3">
                <input id='themeSwitcher' onChange={(e) => {changeThemeCallback(e.target.checked)}} type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-neutral-300 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-500"></div>
            </label>

            <BsMoonStarsFill className={
                'w-[19px] h-[19px] '
                + 'text-neutral-300 '
                + 'dark:text-sky-500 '} />
        </div>
    )
}