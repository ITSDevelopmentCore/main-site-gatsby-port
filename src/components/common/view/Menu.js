/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports : media
 */
import { FaTelegramPlane } from 'react-icons/fa'

/**
 * Imports : Gatsby
 */
import { Link } from 'gatsby';

const MainMenu = (props) =>
  <div className={
    'absolute top-[120px] w-full justify-between z-30 flex p-[20px] '
    + 'card_primary rounded-[10px] shadow-lg'}>

    <nav className='flex space-x-[40px]'>

      {props.categories.map(

        (category, index) => 

          <div key={index} className='basis-0 grow max-w-[30%] text-[14px]'>

            <h2 className='font-semibold px-[10px] mb-[15px] text-sky-500'>{category.name}</h2>

            {category.subcategories.map((subcategory, index) => (
              <Link to={category.links[index]}>
                <p key={index} className='cursor-pointer p-[10px] rounded-[5px] dark:hover:bg-gray-600 hover:bg-sky-100'>
                  {subcategory}
                </p>
              </Link>

            ))}

          </div>
        )}

    </nav>


    <div className='relative rounded-[10px] bg-purple-300 p-[20px] flex flex-col items-center justify-center space-y-[20px] text-center text-white font-semibold'>
      <span>Закрытый канал о технологиях и бизнесе</span>
      <div className='w-full flex justify-around items-center'>
        <FaTelegramPlane className='absolute top-0 left-0 w-[200px] h-[200px] opacity-20' />
        <button className='h-fit rounded-[10px] py-[10px] px-[30px] bg-white text-purple-300 hover:bg-purple-300 hover:text-white transition-all dura200'>Вступить</button>
      </div>
      <span>С уникальными ботами</span>
    </div>

  </div>


export default MainMenu;
