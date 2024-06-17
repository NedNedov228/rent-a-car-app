import location from "../../assets/location-icon.svg";
import { logout } from "../../api/Service";
import React from "react";
import { isAuth } from "../../api/Service";
import './header.scss'

const Header = () => {
    if (!isAuth) {
        return (
            <header className='header'>
                <p className='header__text'>
                    Эх, прокачу!
                </p>

             <button >
                <a href="/login">Вход</a>
            </button>
            </header>)
    }


    return (
        <header className='header'>
            <p className='header__text'>
                Эх, прокачу!
            </p>
          
            <button onClick={logout}>
                Выход
            </button>
        </header>)
}

export default Header
