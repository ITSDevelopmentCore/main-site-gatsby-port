/**
 * Imports : React
 */
import React, { useContext } from 'react';
import { ThemeContext } from '../../../layouts';

/**
 * Imports : media
 */
import { BsMoonStarsFill } from 'react-icons/bs';

function DarkThemeModal() {

    const { changeThemeCallback } = useContext(ThemeContext);

    function positiveClick() {
        changeThemeCallback(true)
    }

    function negativeClick() {
        changeThemeCallback(false)
    }

    return (

        <div
            id='modal-dark-theme'
            className={
                'modal-box hidden right-5 bottom-5 z-10 '
                + 'card_primary overflow-hidden'}>
            <BsMoonStarsFill className='text-blue-400 absolute h-full w-full -z-[1]' />
            <h3 className="font-bold text-lg">Включим ночную тему?</h3>
            <p className="py-4"></p>
            <div className="modal-action">
                <button
                    onClick={() => positiveClick()}
                    className="btn">Да</button>
                <button
                    onClick={() => negativeClick()}
                    className="btn">Нет</button>
            </div>
        </div>
    )
}


export default DarkThemeModal;