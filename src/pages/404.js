/**
 * Imports : React
 */
import * as React from "react"

const NotFoundPage = () => {
  return (
    <section className={'card_primary mt-[100px]'}>

      <h4 className={'mb-6 font-extrabold text-[24px]'}>
        404
      </h4>

      <p className={'opacity-60'}>
        {'Страница не найдена.'}
      </p>

    </section>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
