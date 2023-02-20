/**
 * Imports : React
 */
import React from 'react';

let ElementFAQ = (props) => 
        <div
            role='button'
            tabIndex={0}
            className='font-sans collapse collapse-plus card_primary p-[20px]'>

            <span className='collapse-title text-xl font-medium'>
                {props.title}
            </span>

            <p className='collapse-content opacity-60'>
                {props.description}
            </p>

        </div>
    

export default ElementFAQ

