/**
 * Imports : React
 */
import React from 'react';

/**
 * Imports : components
 */

import CardStageFAQ from '../view/CardStageFAQ';
import Symbol from '../../common/view/Symbol';

export default function BlockFAQ() {

    const buttonClickHandler = () => {
        document.getElementById('feedback').scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <section className={
            'mt-[120px] '
            + 'laptop:mt-[265px]'}>

            <h2 className={'mb-12 section-title'}>
                FAQ
            </h2>


            <div className={
                'flex flex-col space-y-[16px] '
            }>
                <CardStageFAQ
                    plus={<Symbol symbol='+' />}
                    title='Lorem ipsum dolor sit amet'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. Etiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero. Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.' />
                <CardStageFAQ
                    plus={<Symbol symbol='+' />}
                    title='Lorem ipsum dolor sit amet'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. Etiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero. Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.' />
                <CardStageFAQ
                    plus={<Symbol symbol='+' />}
                    title='Lorem ipsum dolor sit amet'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. Etiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero. Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.' />
                <CardStageFAQ
                    plus={<Symbol symbol='+' />}
                    title='Lorem ipsum dolor sit amet'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. Etiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero. Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.' />

            </div>
            <button className='w-full mt-[35px] leading-[35px] text-sky-500 card_primary p-[20px] rounded-[35px]'
            onClick={buttonClickHandler}>
                Задать вопрос
            </button>


        </section>
    )
}


