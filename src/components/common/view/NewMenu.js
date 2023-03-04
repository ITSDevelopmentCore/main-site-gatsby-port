/**
 * Imports : React
 */
import React from 'react';

const NewMenu = (props) => 
        <div className='absolute top-[150px] z-20 w-full card_primary flex justify-around p-[20px] rounded-[10px]'>

          {props.categories.map((category, index) => (

            <div key={index} className='w-fit px-2 space-y-[10px]'>

              <h2 className='font-semibold text-xl mb-2'>{category.name}</h2>

              {category.subcategories.map((subcategory, index) => (
                <p key={index} className='cursor-pointer'>
                  {subcategory}
                </p>
              ))}

            </div>
          ))}

        </div>


export default NewMenu;
