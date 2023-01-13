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
import { showDarkThemeModal, showModalAccepted } from "../scripts/changeViewByIdScripts";

/**
 * Imports : components
 */
import Modals from "../components/common/modals/ModalDarkTheme";
import Footer from "../components/common/blocks/Footer";
import Header from "../components/common/blocks/Header";

/**
 * Imports : media
 */
import BgLight from '../assets/home/background-light.webp';
import BgDark from '../assets/home/background-dark.webp';


export const ThemeContext = React.createContext();

export default function Layout(props) {

    const [cookies, setCookie] = useCookies();
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        workWithFirstVisit();
        workWithTheme();
        workWithLastRequest();
    })

    return (
        <ThemeContext.Provider value={{ theme, changeThemeCallback }}>
            <div style={theme === 'dark' ? { backgroundImage: `url(${BgDark})`, backgroundSize : '100% 100%'} : { backgroundImage: `url(${BgLight})`, backgroundSize : '100% 100%' }}>
                <div
                    className={'mx-5 laptop:mx-10 desktop:w-[1500px] desktop:mx-auto'}>

                    <CookiesProvider>
                        <Header />
                        <Modals />
                        <main className="min-h-[100vh]">
                            {props.children}
                        </main>
                        <Footer />
                    </CookiesProvider>

                </div>
            </div>

        </ThemeContext.Provider>

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

    function workWithLastRequest()
    {
        if (cookies.requestAccepted) {
            showModalAccepted();
            setCookie('requestAccepted', undefined)
        }
    }

}