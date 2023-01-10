/**
 * Imports : React
 */
import React, { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { CookiesProvider } from "react-cookie";

/**
 * Imports : scripts
 */
import { applyTailwindDarkTheme } from "../scripts/themeScripts";
import { showDarkThemeModal } from "../scripts/changeViewByIdScripts";

/**
 * Imports : components
 */
import ModalDarkTheme from "../components/common/modals/ModalDarkTheme";
import Footer from "../components/common/blocks/Footer";
import Header from "../components/common/blocks/Header";

export const ThemeContext = React.createContext();

export default function Layout(props) {

    const [cookies, setCookie] = useCookies();
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        workWithFirstVisit();
        workWithTheme();
    })

    return (
            <div className={'mx-5 laptop:mx-10 desktop:w-[1500px] desktop:mx-auto'}>
                <CookiesProvider>
                    <ThemeContext.Provider value={{ theme, changeThemeCallback }}>
                        <Header />
                        <ModalDarkTheme />
                        <main>
                            {props.children}
                        </main>
                        <Footer />
                    </ThemeContext.Provider>
                </CookiesProvider>
            </div>
    )

    function changeThemeCallback(changedToDark) {
        if (changedToDark) {
            setCookie('theme', 'dark');
            applyTailwindDarkTheme(true);
            setTheme('dark');
        } else {
            setCookie('theme', 'light');
            applyTailwindDarkTheme(false);
            setTheme('light');
        }
    }

    function workWithFirstVisit() {
        if (cookies.firstVisit === undefined) {
            setTimeout(() => { showDarkThemeModal() }, 3000);
            setCookie('firstVisit', false);
        }
    }

    function workWithTheme() {
        if (cookies.theme === 'dark') {
            applyTailwindDarkTheme(true);
            setTheme('dark');
        }
        if (cookies.theme === 'light') {
            applyTailwindDarkTheme(false);
            setTheme('light')
        }
    }

}