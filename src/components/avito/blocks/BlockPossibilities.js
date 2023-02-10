/**
 * Imports : React
 */
import React from 'react';
import CardStage from '../view/CardPossibilities';
import Robot from '../../../assets/avito/Robot-icon.webp'
import Manager from '../../../assets/avito/ManOnPhone-icon.webp'
import Integrations from '../../../assets/avito/Integrations-icon.webp'
import Chat from '../../../assets/avito/Chat-icon.webp'
import Script from '../../../assets/avito/Script-icon.webp'
import { AiFillRobot } from 'react-icons/fa';

export default function BlockPreview() {

  return (
    <section className={
      'mt-[100px] mb-[110px] '}>
     <h2 className={'section-title text-black'}>
                Возможности 
            </h2>

            <p className={
                'w-full mb-16 text-center text-gray-800'
                + 'text-[18px] leading-8 opacity-60 '
                + 'laptop:w-[722px] laptop:text-left'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu. Pellentesque at interdum leo, ac tristique elit. Etiam nec erat in eros dictum luctus. Etiam et efficitur diam, nec imperdiet risus. Nulla at aliquam libero. Nulla vitae turpis sollicitudin, volutpat sapien et, feugiat magna. Donec a leo lorem. Sed felis.
            </p>

            <div className={
                
                 'grid grid-cols-3 gap-y-[47px] gap-x-[30px] '
                }>
                <CardStage
                    icon = {Robot}
                    title='Автоответчик'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu' />
                <CardStage
                    icon={Manager}
                    title='Консультирование'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu' />
                <CardStage
                    icon={Integrations}
                    title='Интеграции'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu' 
                    more='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu'
                    />
                    
                  
                <CardStage
                    icon={Chat}
                    title='Опросы'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu' />
                <CardStage
                    icon={Script}
                    title='Сложные скрипты'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar lorem, non viverra arcu' />
               
            </div>
    </section>
  );
}
