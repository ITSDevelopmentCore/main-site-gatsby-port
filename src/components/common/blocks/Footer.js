/**
 * Imports : React
 */
import React from "react";

/**
 * Imports : media
 */
import IcDzen from '../../assets/icons/IcDzen'
import IcVK from '../../assets/icons/IcVK'
import IcTelegram from '../../assets/icons/IcTelegram'
import { AiOutlineArrowUp } from 'react-icons/ai'

/**
 * Imports : scripts
 */
import Symbol from '../view/Symbol';

function Footer() {

  const scrollButtonHandler = () => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) };

  return (
    <footer className="py-[40px] border-t border-[#D9D9D9] dark:border-[#253646]">

      <div className={
        'flex justify-center '
        + 'laptop:justify-between'}>

        <div className="flex space-x-[20px]">

          <a
            href="https://vk.com/itsdevelopmentru"
            className={
              'w-[50px] aspect-square '
              + 'laptop:w-[66px]'}>
            <IcVK/>
          </a>

          <a
            href="https://dzen.ru/id/625161885fa8243b3e5b4ec3"
            className={
              'w-[50px] aspect-square '
              + 'laptop:w-[66px]'}>
            <IcDzen/>
          </a>

          <a
            href="https://t.me/+3ERzYQm6fUxhNjky"
            className={
              'w-[50px] aspect-square '
              + 'laptop:w-[66px]'}>
            <IcTelegram/>
          </a>

        </div>


        <button
          className={
            'p-[3px] w-[50px] aspect-square hidden '
            + 'bg-sky-500 rounded-xl '
            + 'laptop:w-[66px] laptop:block'}
          onClick={scrollButtonHandler}>

          <div className="text-sky-500 flex justify-center items-center rounded-xl bg-white w-full h-full dark:bg-[#191E25]">
            <AiOutlineArrowUp className="w-8 h-8" />
          </div>

        </button>

      </div>

      <p className={
        'flex flex-col items-center mt-[35px] space-y-[12px] '
        + 'font-light '
        + 'laptop:items-start '}>

        <span>
          Сотрудничество: itsdevelopmentru<Symbol symbol="@" />gmail.com
        </span>
        <span>
          ОГРНИП: 322665800197196
        </span>
        <span>
          Copyright <Symbol symbol="&copy;" /> 2022. All rights reserved
        </span>

      </p>

    </footer>
  );
}

export default Footer;