/**
 * Для работы данного компонента необходим установленный DaisyUI плагин к TailwindCSS.
 */


/**
 * Imports : React
 */
import React from "react";

function DropdownMenuMobile() {
    return (
        <menu
            id={"dropdownMenuMobile"}
            className={'hidden absolute top-[70px] right-0 left-0 z-20'}>
            <ul>
                <DropdownMenuMobileCategory
                    title='О компании и соискателям'
                    content={
                        [
                            { title: 'О нас', href: 'http://127.0.0.1:5500/build/html/telegram.html' },
                            { title: 'Вакансии', href: 'http://127.0.0.1:5500/build/html/telegram.html' },
                        ]
                    }
                />
                <DropdownMenuMobileCategory
                    title='Услуги'
                    content={
                        [
                            { title: 'Telegram разработка', href: 'http://127.0.0.1:5500/build/html/telegram.html' },
                            { title: 'Mobile разработка', href: 'http://127.0.0.1:5500/build/html/telegram.html' },
                            { title: 'Web разработка', href: 'http://127.0.0.1:5500/build/html/telegram.html' },
                            { title: 'Startup MVP', href: 'http://127.0.0.1:5500/build/html/telegram.html' },
                        ]
                    }
                />
                <DropdownMenuMobileCategory
                    title='Решения'
                    content={
                        [
                            { title: 'Bot System', href: 'http://127.0.0.1:5500/build/html/development.html' },
                        ]
                    }
                />
            </ul>
        </menu>
    )
}

function DropdownMenuMobileCategory(props) {
    return (
        <li tabIndex={0}
            className={
                'collapse '
                + 'bg-white rounded-[4px] '
                + 'dark:bg-card-surface dark:border dark:border-slate-800'}>

            <p className="collapse-title text-xl font-medium block">
                {props.title}
            </p>

            <ul>
                {props.content.map(function (item) {
                    return <DropdownMenuMobileItem
                        title={item.title}
                        link={item.href} />;
                })}
            </ul>


        </li>
    )
}


function DropdownMenuMobileItem(props) {
    return (
        <a href={props.link}>
            <li className={
                'flex justify-center items-center h-[60px] '
                + 'bg-white rounded-[4px] '
                + 'dark:bg-card-surface'}>

                <span className="text-sky-500">{props.title.split(' ')[0]}</span>
                &nbsp;
                <span>{props.title.split(' ')[1]}</span>

            </li>
        </a>
    )
}




export default DropdownMenuMobile;
