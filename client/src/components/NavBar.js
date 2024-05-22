import React, {useContext} from 'react';
import {Context} from "../index";
import { observer } from 'mobx-react-lite';
import favicon from '../assets/img/favicon.jpg';

const NavBar = () => {
    const {user} = useContext(Context)
    const handleLoginClick = (event) => {
        event.preventDefault(); 
        user.setIsAuth(true); 
    };
    return (
        <div>
            <section id="header">
                <a href="index.html"><img src={favicon} className="logo" alt="" /></a>
                <div id="left-side">
                    <ul id="navbar" className="navbar">
                        <li><a href="index.html">ГЛАВНАЯ</a></li>
                        <li><a href="about.html">О НАС</a></li>
                        <li><a href="contacs.html">КОНТАКТЫ</a></li>
                        <li id="lg-bag"><a href="basket.html"><i className="fa-solid fa-basket-shopping"></i></a></li>
                        <a href="#" id="close" className="close"><i className=" fa-solid fa-xmark"></i></a>
                    </ul>
                </div>
                <div id="right-side">
                    <ul id="navbar" className="navbar">
                        {user.isAuth ? (
                    <>
                        <li><a href="admin.html">ADMIN</a></li>
                        <li><a href="logout.html">ВЫЙТИ</a></li>
                    </>
                ) : (
                    <li><a href="login.html" onClick={handleLoginClick}>АВТОРИЗАЦИЯ</a></li>
                )}
            </ul>
                </div>
                <div id="mobile">
                    <a href="login.html"><i id="login" className="fa-solid fa-right-to-bracket"></i></a>
                    <a href="basket.html"><i id="basket" className="fa-solid fa-basket-shopping"></i></a>
                    <i id="bar" className=" btn_burger fa-solid fa-bars"></i>
                </div>
            </section>
        </div>

        
    )
}


export default observer(NavBar);