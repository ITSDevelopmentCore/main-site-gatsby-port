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

            <h2 className={'mb-[50px] section-title'}>
                FAQ
            </h2>

            <div className={'flex flex-col space-y-[16px]'}>

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

            <button className={'mt-[40px] button w-full font-bold bg-white rounded-xl text-sky-500 border-2 border-white transition-all duration-200 hover:text-white hover:bg-transparent '
                + 'dark:bg-transparent dark:text-white dark:border-sky-500 dark:hover:bg-sky-500  '}
                onClick={buttonClickHandler}>
                Задать вопрос
            </button>


        </section>
    )
}


