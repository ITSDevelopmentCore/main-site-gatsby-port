import React from "react"


/**
 * Вспомогательный компонент для отображения символов шрифта, не включенных в Trial версию.
 */

export default function Symbol(props) {
    return (
        <span className="font-sans">{props.symbol}</span>
    )
}