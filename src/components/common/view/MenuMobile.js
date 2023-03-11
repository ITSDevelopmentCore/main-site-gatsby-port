/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports : Gatsby
 */
import { Link } from 'gatsby';

const DropdownMenuMobile = (props) => {
    return (<menu
        id='dropdownMenuMobile'
        className='hidden absolute top-[70px] rounded-[10px] right-0 left-0 z-40'>

        <ul>
            {props.categories.map(category => 
                <DropdownMenuMobileCategory
                    title={category.name}
                    subcategories={category.subcategories}
                    links={category.links} />
            )}
        </ul>
    </menu>)
}


const DropdownMenuMobileCategory = (props) => {

    return (
        props.subcategories.map((subcategory, index) => {
        return (
            <li className='collapse card_primary rounded-none p-0'>
                <input type='checkbox' className='peer' />

                <p className='collapse-title text-center font-semibold'>
                    {props.title}
                </p>

                <ul className='collapse-content'>
                    <DropdownMenuMobileItem
                        title={subcategory}
                        link={props.links[index]} />;
                </ul>
            </li>
        )})
    )

}


const DropdownMenuMobileItem = (props) => {
    return(
        <Link to={props.link}>
        <li
            className='p-[10px] mb-[5px] bg-sky-100 rounded-[10px]'>
            <span className='text-sky-500'>{props.title.split(' ')[0]}</span>
            &nbsp;
            <span>{props.title.split(' ')[1]}</span>
        </li>
    </Link>
    )

}

export default DropdownMenuMobile;
