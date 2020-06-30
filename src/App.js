import React, {createContext, useState} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Main from "./components/Main";
import Footer from "./components/Footer";


export const ThemeContext = createContext("light");

export default function App() {

    const [theme, setTheme] = useState("dark");
    return (
        <ThemeContext.Provider value={theme}>
            <div className="App">
                <Header/>
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>change Theme</button>
                <Main/>
                <Footer/>
            </div>
        </ThemeContext.Provider>
    );
}

