import { useEffect, useState } from "react"


const useDarkMode = () => {

    const [theme, setTheme] = useState(localStorage.theme)

    const themeMode = theme === 'dark' ? 'light' : 'dark'

    useEffect(() => {
      const root = window.document.documentElement;

      root.classList.remove(themeMode)
      root.classList.add(theme)
      localStorage.setItem('theme', theme);
    }, [theme])
    

  return [themeMode, setTheme]
}

export default useDarkMode