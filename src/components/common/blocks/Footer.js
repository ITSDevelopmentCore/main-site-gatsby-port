/**
 * Imports : React
 */
import { Link } from "gatsby";
import React from "react";

/**
 * Imports : Media
 */
import { SlSocialVkontakte } from 'react-icons/sl';
import { AiOutlineYoutube } from 'react-icons/ai';
import { TbBrandTelegram } from 'react-icons/tb';

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
          <Link to='/bots/telegram' className="link link-hover">Телеграм разработка</Link>
          <Link to='/bots/avito' className="link link-hover">Авито разработка</Link>
          <Link to='/bots/instagram' className="link link-hover">Инстаграм разработка</Link>
          <Link to='/bots/vkontakte' className="link link-hover">Вконтакте разработка</Link>

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

        <div className="space-y-[12px] text-[24px]">

          <a
            rel="noreferrer"
            href="tel:88001015228">
            8 <Symbol symbol="(" />800<Symbol symbol=")" /> 101-52-28
          </a>

          <a
            rel="noreferrer"
            href="mailto:support@itsdevelopment.ru&body=Здравствуйте,?subject=Служба поддержки ITS Development"
            target="_blank">
            support<Symbol symbol='@' />itsdevelopment.ru
          </a>

        </div>

        <div className="justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://vk.com/itsdevelopmentru"><SlSocialVkontakte className='w-[30px] h-[30px] hover:scale-125 stroke-custom' /></a>
            <a href="https://www.youtube.com/@user-fy4lv8pi4g"><AiOutlineYoutube className='w-[30px] h-[30px] hover:scale-125' /></a>
            <a href="https://t.me/+3ERzYQm6fUxhNjky"><TbBrandTelegram className='w-[30px] h-[30px] hover:scale-125' /></a>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Footer;