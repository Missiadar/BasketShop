import React, {useContext, useState } from 'react';
import {Context} from "../index"
import favicon from '../assets/img/favicon.jpg';

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <div>
                <section id="header">
                <a href="index.html"><img src={favicon} className="logo" alt="" /></a>

                <div>
                    <ul id="navbar" className="navbar">
                        <li><a href="index.html">Главная</a></li>
                        <li><a href="about.html">О нас</a></li>
                        <li><a href="contacs.html">Контакты</a></li>
                        <li id="lg-bag"><a href="basket.html"><i className="fa-solid fa-basket-shopping"></i></a></li>
                        <a href="#" id="close" className="close"><i className=" fa-solid fa-xmark"></i></a>
                    </ul>
                </div>
                <div id="mobile">
                    <a href="basket.html"><i id="basket"className="fa-solid fa-basket-shopping"></i></a>
                    <i id="bar" className=" btn_burger fa-solid fa-bars"></i>
                </div>
            </section>
        </div>

        
    )
}


export default NavBar;