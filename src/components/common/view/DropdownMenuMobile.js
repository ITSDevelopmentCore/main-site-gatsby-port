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
            className={'hidden absolute top-[70px] right-0 left-0 z-40'}>
            <ul>

                <DropdownMenuMobileCategory
                    title='О компании и соискателям'
                    key='О компании и соискателям'
                    content={
                        [
                            { title: 'О нас', href: '/' },
                            { title: 'Вакансии', href: '/underDevelopment' },
                        ]
                    } />

                <DropdownMenuMobileCategory
                    title='Услуги'
                    key='Услуги'
                    content={
                        [
                            { title: 'Telegram разработка', href: '/telegram' },
                            { title: 'Mobile разработка', href: '/underDevelopment' },
                            { title: 'Web разработка', href: '/underDevelopment' },
                            { title: 'Startup MVP', href: '/underDevelopment' },
                        ]
                    } />

                <DropdownMenuMobileCategory
                    title='Решения'
                    key='Решения'
                    content={
                        [
                            { title: 'Bot System', href: '/underDevelopment' },
                        ]
                    } />
            </ul>
        </menu>
    )
}

const DropdownMenuMobileCategory = (props) => {
    return (
        <li 
            className={
                'collapse '
                + 'card_primary '}>

            <p className="collapse-title text-xl font-medium block">
                {props.title}
            </p>

            <ul>
                {props.content.map(function (item) {
                    return <DropdownMenuMobileItem
                    key={item.title}
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
