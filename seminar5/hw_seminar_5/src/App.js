import './App.css';
import {store} from './components/store';
import {Provider, useDispatch, useSelector} from "react-redux";
import ThemeSwitcher from "./components/ThemeSwitcher";
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
        <h1>Приложение с переключением темы</h1>
        <ThemeSwitcher />
        <p>Текущая тема {isDarkTheme ? "ТЕМНАЯ" : "СВЕТЛАЯ"}</p>
    </div>
  );
}

export default App;
