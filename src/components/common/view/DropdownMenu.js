/**
 * Imports : React
 */
import React from "react";

/**
 * Imports : media
 */
import { TfiAngleDown } from 'react-icons/tfi';

function DropdownMenu(props) {
    return (
        <div className="dropdown dropdown-hover group">

            <label
                className={
                    'flex items-center '
                    + 'cursor-pointer text-[18px] font-bold '}>
                {props.title}
                <TfiAngleDown className={'w-[14px] h-[10px] mt-[3px] ml-2 mr-10 inline-block group-hover:-rotate-90 transition-all text-sky-500 stroke-custom'} />
            </label>

            <div className="dropdown-content">
                <ul className="mt-4 menu p-2 shadow bg-base-100 rounded-box w-52 dark:bg-card-surface dark:border-slate-800 dark:border">
                    {props.items.map(function (item) {
                        return <MenuItem link={item.link} title={item.title} key={item.title} />;
                    })}
                </ul>
            </div>
        </div>
    )
}

function MenuItem(props) {
    return (
        <li>
            <a href={props.link}>
                {props.title}
            </a>
        </li>
    )
}

export default DropdownMenu;
