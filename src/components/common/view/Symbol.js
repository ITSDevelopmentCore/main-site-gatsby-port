/**
 * Вспомогательный компонент для отображения символов шрифта, не включенных в Trial версию.
 */

/**
 * Imports: React
 */
import React from "react"

export default function Symbol(props) {
    return (
        <span className="font-sans">{props.symbol}</span>
    )
}