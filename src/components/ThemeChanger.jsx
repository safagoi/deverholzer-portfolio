import Sun from "../assets/sun-icon.svg";
import Moon from "../assets/moon-icon.svg";

import { useState } from "react";

export default function ThemeChanger() {
    const [theme, setTheme] = useState('light');

    function toogleTheme() {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <div className="ThemeChanger">
            <div className="theme-changer-icon" onClick={toogleTheme}>
                {
                    theme === 'light' ?
                        <Moon width={36} height={36} />
                        :
                        <Sun width={36} height={36} />
                }
            </div>
        </div>
    )
}