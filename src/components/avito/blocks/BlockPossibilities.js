/**
 * Imports : React
 */
import React from 'react';
import CardStage from '../view/CardPossibilities';

/**
 * Imports : media
 */
import { FaRobot } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';
import { MdIntegrationInstructions } from 'react-icons/md';
import { RiSurveyFill } from 'react-icons/ri';
import { AiOutlineCode } from 'react-icons/ai';
import { AiOutlineAppstore } from 'react-icons/ai';



export default function BlockPreview() {

    return (
        <section className={'my-[100px]'}>

            <h2 className={'section-title'}>
                Возможности
            </h2>

            <p className={
                'w-full mb-16 text-center '
                + 'text-[18px] leading-8 opacity-60 '
                + 'laptop:w-[722px] laptop:text-left'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. Etiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero. Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.
            </p>

            <div className={'grid grid-cols-1 gap-y-[40px] gap-x-[30px] '
        +'laptop:grid-cols-2 '
        +'large:grid-cols-3'}>

                <CardStage
                    number={1}
                    icon={<FaRobot className='w-full h-full'/>}
                    title='Автоответчик'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu' />
                <CardStage
                    number={2}
                    icon={<MdSupportAgent className='w-full h-full'/>}
                    title='Консультирование'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu' />
                <CardStage
                    number={3}
                    icon={<MdIntegrationInstructions className='w-full h-full'/>}
                    title='Интеграции'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu'
                    more='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu'/>
                <CardStage
                    number={4}
                    icon={<RiSurveyFill className='w-full h-full'/>}
                    title='Опросы'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu' />
                <CardStage
                    number={5}
                    icon={<AiOutlineCode className='w-full h-full'/>}
                    title='Сложные скрипты'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu' />
                <CardStage
                    number={6}
                    icon={<AiOutlineAppstore className='w-full h-full'/>}
                    title='Сложные скрипты'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu' />
            </div>
        </section>
    );
}
