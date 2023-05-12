import Sun from "../assets/sun-icon.svg";
import Moon from "../assets/moon-icon.svg";

import { useMainContext } from "@/context/MainContext";


export default function ThemeChanger() {
    const {themes, theme, setTheme } = useMainContext();

    function handleOnclick() {
        let currentIndex = themes.indexOf(theme);
        let nextIndex = (currentIndex == 0 ? 1 : 0);

        setTheme(themes[nextIndex]);
    }
    
    // const [theme, setTheme] = useState('light');

    // function toogleTheme() {
    //     if (theme === 'light') {
    //         setTheme('dark');
    //     } else {
    //         setTheme('light');
    //     }
    // }

    return (
        <div className="ThemeChanger">
            <div className="theme-changer-icon" onClick={handleOnclick}>
                {
                    theme === 't-light' ?
                        <Moon width={36} height={36} />
                        :
                        <Sun width={36} height={36} />
                }
            </div>
        </div>
    )
}