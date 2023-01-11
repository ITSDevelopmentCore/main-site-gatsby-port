/**
 * Imports : React
 */
import React, { useState } from "react";

/**
 * Imports : media
 */
import IcTechTask from '../../../assets/common/icons/ic_tech-task.svg';

/**
 * Imports : scripts
 */
import Symbol from '../view/Symbol';


function FeedbackForm() {

    const extractFileName = (file) => {
        var fileList = file.target.files;
        if (file.target.files.length !== 0) {
            setFile(fileList[0].name)
        }
    }

    const [file, setFile] = useState('Прикрепите техническое задание');

    return (
        <form
            className={'grow flex flex-col'}
            action='https://submit-form.com/F8bMh3aV'>

            {/* Скрытый инпут, использующийся для редиректа в Formspark */}
            <input
                type="hidden"
                name="_redirect"
                value="http://127.0.0.1:5500/build/html/telegram.html" />

            <div className={'large:flex large:space-x-[50px]'}>

                <div className="basis-1/2">

                    <p className={
                        'mb-[10px] '
                        + 'text-[16px] leading-[30px] '
                        + 'laptop:text-[20px] laptop:leading-[38px] laptop:mb-[14px] '}>
                        Номер телефона <span className="text-red-400"><Symbol symbol='*' /></span>
                    </p>

                    <input
                        className={
                            'w-full h-[70px] p-6 mb-6 '
                            + 'font-sans rounded-lg opacity-50 focus:outline-none focus:border focus:border-sky-500 caret-sky-500 scrollbar-hide '
                            + 'laptop:text-[18px] laptop:leading-[34px] '
                            + 'dark:bg-slate-800'}
                        type='tel'
                        placeholder='7 999 999 99 99'
                        id="number"
                        name="number">
                    </input>

                    <p className={'mb-[10px] text-[16px] leading-[30px] '
                        + 'laptop:mb-[14px] laptop:text-[20px] laptop:leading-[38px]'}>
                        Как к Вам обращаться?
                    </p>

                    <input
                        className={
                            'w-full h-[70px] p-6 mb-6 '
                            + 'font-sans rounded-lg opacity-50 focus:outline-none focus:border-2 focus:border-sky-500 caret-sky-500 scrollbar-hide '
                            + 'laptop:text-[18px] laptop:leading-[34px] '
                            + 'dark:bg-slate-800'}
                        placeholder="Иван"
                        id="name"
                        name="name" />

                </div>


                <div className="basis-1/2">

                    <p className={'mb-[10px] text-[16px] leading-[30px] '
                        + 'laptop:mb-[14px] laptop:text-[20px] laptop:leading-[38px]'}>
                        E-mail <span className="text-red-400"><Symbol symbol='*' /></span>
                    </p>

                    <input
                        className={
                            'w-full h-[70px] p-6 mb-6 '
                            + 'font-sans rounded-lg opacity-50 focus:outline-none focus:border-2 focus:border-sky-500 caret-sky-500 scrollbar-hide '
                            + 'laptop:text-[18px] laptop:leading-[34px] '
                            + 'dark:bg-slate-800'}
                        placeholder="my@gmail.com"
                        id="email"
                        name="email" />

                    <p className={'mb-[10px] text-[16px] leading-[30px] '
                        + 'laptop:mb-[14px] laptop:text-[20px] laptop:leading-[38px]'}>
                        Техническое задание
                    </p>


                    <label
                        className="flex mb-5 items-center"
                        htmlFor='techtask'>

                        <img className={
                            'w-[45px] aspect-square mr-5 '
                            + 'laptop:w-[70px] '
                            + 'cursor-pointer rounded-lg'}
                            src={IcTechTask}
                            alt='Upload technical task (Clickable Icon)'>
                        </img>

                        <input
                            className="hidden"
                            type="file"
                            accept=".doc, .txt, .pdf"
                            onChange={(e) => extractFileName(e)}
                            id="techtask"
                            name="techtask" />

                        <div className={
                            'text-[14px] leading-[16px] font-light '
                            + 'laptop:text-[18px] laptop:leading-[21px]'}>
                            {file}
                        </div>

                    </label>

                </div>

            </div>

            <p className={'mb-[10px] text-[16px] leading-[30px] '
                + 'laptop:mb-[14px] laptop:text-[20px] laptop:leading-[38px]'}>
                Описание задачи
            </p>

            <textarea
                className={
                    'w-full h-[140px] pb-[90px] p-6 text-[14px] leading-[27px] '
                    + 'font-sans rounded-lg opacity-50 focus:outline-none focus:border-2 focus:border-sky-500 caret-sky-500 scrollbar-hide '
                    + 'laptop:text-[18px] laptop:leading-[34px] '
                    + 'dark:bg-slate-800'}
                placeholder="Кратко опишите вашу задачу"
                id="description"
                name="description" />

            <button
                type="submit"
                className={
                    'mt-[53px] px-[50px] py-[11px] w-fit mx-auto '
                    + 'text-white rounded-[6px] text-[14px] leading-[20px] font-bold shadow-blue bg-gradient-to-t from-sky-500 to-sky-300 dark:to-sky-500 transition-all duration-200 hover:shadow-blue-extended '
                    + 'laptop:mx-0 laptop:px-[80px] laptop:py-[20px] laptop:text-[22px] laptop:leading-[33px] laptop:mt-[42px]'}>
                Отправить
            </button>

        </form>
    )
}

export default FeedbackForm;