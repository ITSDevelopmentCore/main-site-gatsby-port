/**
 * Imports : React
 */
import React from 'react';

const MainMenu = (props) =>
  <div 
  className={
    'absolute top-[120px] w-full z-30 flex justify-start p-[20px] space-x-[80px] '
    + 'card_primary rounded-[10px] shadow-lg'}>

    {props.categories.map((category, index) => (

      <div key={index} className='w-fit space-y-[10px]'>

        <h2 className='font-semibold text-xl mb-2'>{category.name}</h2>

        {category.subcategories.map((subcategory, index) => (
          <p key={index} className='cursor-pointer py-[10px] rounded-[5px] dark:hover:bg-gray-600 hover:bg-gray-200'>
            {subcategory}
          </p>
        ))}

      </div>
    ))}

  </div>


export default MainMenu;
