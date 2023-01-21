/**
 * Imports : React
 */
import { Link } from "gatsby-link";
import React from "react";

/**
 * Imports : Media
 */
import {SlSocialVkontakte} from 'react-icons/sl';
import {AiOutlineYoutube} from 'react-icons/ai';
import {TbBrandTelegram} from 'react-icons/tb';

/**
 * Imports : components
 */
import Symbol from '../view/Symbol'


const Footer = () => {

  return (
    <>
      <footer className="footer py-10">
        
        <div>
          <span className="mb-10px uppercase text-sky-500 font-bold">Услуги</span>
          <Link to='/telegram' className="link link-hover">Телеграм разработка</Link>
          <Link to='/underDevelopment' className="link link-hover">Разработка мобильных приложений</Link>
          <Link to='/underDevelopment' className="link link-hover">Веб разработка</Link>
          <Link to='/underDevelopment' className="link link-hover">Поддержка стартапов</Link>
        </div>

        <div>
        <span className="mb-10px uppercase text-sky-500 font-bold">О компании</span>
          <Link to='/' className="link link-hover">О нас</Link>
          <Link to='/underDevelopment' className="link link-hover">Открытые вакансии</Link>
        </div>

        <div>
        <span className="mb-10px uppercase text-sky-500 font-bold">Правовые документы</span>
          <Link to='/policy-privacy' className="link link-hover">Политика конфиденциальности</Link>
          <Link to='/policy-cookie' className="link link-hover">Политика использования Cookies</Link>
          <Link to='/policy-organization' className="link link-hover">О компании</Link>
        </div>

      </footer>

      <footer className="footer py-10 border-t border-[#D9D9D9] dark:border-[#253646]">
        
        <div className="items-center grid-flow-col">
          <p>ITS Development <br />Работа в сфере информационных технологий с 2019 <br /> itsdevelopmentru<Symbol symbol='@'></Symbol>gmail.com</p>
        </div>

        <div className="justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link to="https://vk.com/itsdevelopmentru"><SlSocialVkontakte className='w-[30px] h-[30px] hover:scale-125 stroke-custom'/></Link>
            <Link to="https://www.youtube.com/@user-fy4lv8pi4g"><AiOutlineYoutube className='w-[30px] h-[30px] hover:scale-125'/></Link>
            <Link to="https://t.me/+3ERzYQm6fUxhNjky"><TbBrandTelegram className='w-[30px] h-[30px] hover:scale-125'/></Link>
          </div>
        </div>
      </footer>
      
    </>
  );
}

export default Footer;