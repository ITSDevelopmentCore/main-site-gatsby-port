/**
 * Imports : React
 */
import React from 'react';

export default function CardStageFAQ(props) {

    return (
        <section className="collapse  card_primary p-[20px] rounded-[35px]">

            <div className={'flex justify-start items-center'}>
                
                <div className="collapse-title text-[19px]">
                    {props.title}
                </div>
                <button className={'collapse-plus mt-[-10px] text-[85px] leading-[55px] font-thin text-transparent bg-clip-text bg-gradient-to-t from-sky-500 via-sky-400 to-sky-300 '}>
                    {props.plus}
                </button>
            </div>

            <div className="collapse-content">
                <p className={'mx-auto text-[14px] leading-[20px] opacity-60'}>{props.description}</p>
            </div>
           

        </section>

    )
}