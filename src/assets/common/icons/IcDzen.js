/**
 * Imports : React
 */
import React, { useContext } from "react";
import { ThemeContext } from '../../../layouts/index';

export default function IcDzen() {

    const {theme} = useContext(ThemeContext);

    return (
        <svg viewBox="0 0 66 66"  fill={theme === 'light' ? "#1D2025" : '#FFFFFF'} xmlns="http://www.w3.org/2000/svg">
            <path d="M33 48C33 39.7157 39.7157 33 48 33H66V61C66 63.7614 63.7614 66 61 66H33V48Z"  />
            <path d="M0 33H18C26.2843 33 33 39.7157 33 48V66H5C2.23858 66 0 63.7614 0 61V33Z"  />
            <path d="M33 0H61C63.7614 0 66 2.23858 66 5V33H48C39.7157 33 33 26.2843 33 18V0Z"  />
            <path d="M0 5C0 2.23858 2.23858 0 5 0H33V18C33 26.2843 26.2843 33 18 33H0V5Z"  />
        </svg>
    )
    
}