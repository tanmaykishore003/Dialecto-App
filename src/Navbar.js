import { useContext } from "react";
import { themeContext } from "./themeContext";
import { languageContext } from "./languageContext";

export const Navbar = () => {
    const {theme, setTheme} = useContext(themeContext)
    const {language, setLanguage} = useContext(languageContext);
  // get theme and lanauge contexts here


  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        {/* add eventListerner to it also change the content of the button based on the theme */}
        <button onClick={toggleTheme}>{theme === 'light'? 'Dark theme' : 'Light Theme'}</button>
        <span>{language}</span>
      </div>
    </div>
  );
};
