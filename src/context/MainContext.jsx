import React, { createContext, useContext, useEffect, useState } from "react";

// Crear contentos
export const MainContext = createContext();

// Componente que envuelve la aplicación para proveer la información del contexto
export default function MainProvider({ children }) { 

    // Valores del tema claro y oscuro
    const themes = [
        't-light',
        't-dark'
    ];

    // Establecer por defecto el tema claro
    const [theme, setTheme] = useState(themes[0]);

    useEffect(() => {
        // Eliminar todos los temas
        themes && themes.map(theme => {
            document.documentElement.classList.remove(theme);
        });

        // Establecer el tema nuevo, añadiendo la clase del tema a la etiqueta html
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

// Hook para acceder al contexto principal
export function useMainContext() {
    return useContext(MainContext);
}