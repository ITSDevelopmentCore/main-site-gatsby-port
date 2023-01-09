import React, { useContext } from 'react';
import { ThemeContext } from '../../../common/components/blocks/Page';

export default function CardAdvantage(props) {

    const {theme} = useContext(ThemeContext);

    return (
        <section className={'w-full'}>

                <div className={
                    'flex items-center justify-center mb-[30px] p-[30px] ' 
                    + 'card_primary '
                    + 'laptop:aspect-square'}>
                        
                    <img src={theme == 'dark' ? props.imageDark : props.imageLight} />
                </div>

                <div className={
                    'h-[110px] p-[30px] flex justify-center items-center '
                    +'card_primary'}>

                    <p className={'font-bold text-center'}>
                        {props.title}                    
                    </p>
                </div>

        </section>
    )
}