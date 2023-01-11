/**
 * Imports : React
 */
import React from "react";
import { useStaticQuery, graphql } from "gatsby"

/**
 * Imports : components
 */
import FeedbackForm from "./FeedbackForm";


function Form() {

  const data = useStaticQuery(graphql`query {
    site {
      siteMetadata {
        title
      }
    }
  }`)

  return (
    <section
      id="feedback"
      className={
        'mt-[100px] mb-[140px] '
        + 'laptop:mt-[240px] '
        + 'laptop:flex laptop:justify-between'}>

      <div className={
        'basis-[50%] '
        + 'large:basis-[40%]'}>

        <h3 className={
          'mb-[15px] ' 
          + 'text-[28px] leading-[32px] font-extrabold text-center '
          + 'laptop:text-[52px] laptop:leading-[58px] laptop:text-left '}>
            {data.site.siteMetadata.title}
          {/* Оставьте заявку<br /> и мы <span className="text-sky-500"> свяжемся <br />с вами </span> */}
        </h3>

        <p className={
          'mb-[70px] '
          + 'text-slate-500 text-[12px] leading-[24px] text-center '
          + 'laptop:text-[18px] laptop:leading-[36px] laptop:text-left laptop:w-[370px] laptop:mt-[36px] laptop:mb-0 '}>
          Среднее время ожидания обратной связи от <span className="text-sky-500">1</span> до <span className="text-sky-500">10</span> минут. В случае приложения технического задания время отклика может составлять от <span className="text-sky-500">10</span> до <span className="text-sky-500">20</span> минут.
        </p>

      </div>

      <FeedbackForm />

    </section>

  );
}

export default Form;