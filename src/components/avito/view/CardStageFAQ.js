/**
 * Imports : React
 */
import React from 'react';

export default function CardStageFAQ(props) {

    return (

        <div tabIndex={0} className="font-sans collapse collapse-plus card_primary p-[20px] rounded-[35px]">
            <div className="collapse-title text-xl font-medium">
                Focus me to see content
            </div>
            <div className="collapse-content">
            <p className={' opacity-60'}>{props.description}</p>            
            </div>
        </div>

    )
}