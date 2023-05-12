import Sun from "../assets/sun-icon.svg";
import Moon from "../assets/moon-icon.svg";

import { useMainContext } from "@/context/MainContext";


export default function ThemeChanger() {
    // Obtener temas, tema actual y función para actualizar tema
    // del MainContext
    const {themes, theme, setTheme } = useMainContext();

    // Cambio del estado tema al clickar sobre el icono
    function handleOnclick() {
        let currentIndex = themes.indexOf(theme);
        let nextIndex = (currentIndex == 0 ? 1 : 0);

        setTheme(themes[nextIndex]);
    }
    
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