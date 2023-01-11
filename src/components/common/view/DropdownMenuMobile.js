/**
 * Imports : React
 */
import React from "react";

/**
 * Imports : Gatsby
 */
import { Link } from 'gatsby';

const DropdownMenuMobile = () => {
    return (
        <menu
            id={"dropdownMenuMobile"}
            className={'hidden absolute top-[70px] right-0 left-0 z-20'}>
            <ul>

                <DropdownMenuMobileCategory
                    title='О компании и соискателям'
                    content={
                        [
                            { title: 'О нас', href: '/' },
                            { title: 'Вакансии', href: '/' },
                        ]
                    } />

                <DropdownMenuMobileCategory
                    title='Услуги'
                    content={
                        [
                            { title: 'Telegram разработка', href: '/telegram' },
                            { title: 'Mobile разработка', href: '/' },
                            { title: 'Web разработка', href: '/' },
                            { title: 'Startup MVP', href: '/' },
                        ]
                    } />

                <DropdownMenuMobileCategory
                    title='Решения'
                    content={
                        [
                            { title: 'Bot System', href: '/' },
                        ]
                    } />
            </ul>
        </menu>
    )
}

const DropdownMenuMobileCategory = (props) => {
    return (
        <li 
            key={props.title}
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


const DropdownMenuMobileItem = (props) => {
    return (
        <Link to={props.link}>
            <li
                key={props.title}
                className={
                    'flex justify-center items-center py-[15px]'}>

                <span className="text-sky-500">{props.title.split(' ')[0]}</span>
                &nbsp;
                <span>{props.title.split(' ')[1]}</span>
            </li>
        </Link>
    )
}

export default DropdownMenuMobile;
