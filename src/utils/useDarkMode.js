import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
        setDarkTheme(true);
    };

    const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
        setDarkTheme(false);
    };

    const toggleTheme = () => {
        if (darkTheme) {
            setLight();
        } else {
            setDark();
        }
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

        if (defaultDark) {
            setDark();
        } else {
            setLight();
        }
    }, []);

    return { toggleTheme }
}