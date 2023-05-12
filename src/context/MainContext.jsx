import React, { createContext, useContext, useEffect, useState } from "react";

export const MainContext = createContext();

export default function MainProvider({ children }) { 

    const themes = [
        't-light',
        't-dark'
    ];

    const [theme, setTheme] = useState(themes[0]);

    useEffect(() => {
        themes && themes.map(theme => {
            document.documentElement.classList.remove(theme);
        });

        document.documentElement.classList.add(theme);
    }, [theme])


    return (
        <MainContext.Provider
            value={{themes, theme, setTheme}}
        >
            {children}
        </MainContext.Provider>
    )
}

export function useMainContext() {
    return useContext(MainContext);
}