import React from 'react';
import logo from './image/logo.jpg';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-">
                <nav className="container-fluid">
                    <Link to={'/search'}><img src={logo} style={{width:"100px"}} alt="LogoSearch" className="test-0-logo"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'}><a className="nav-link" aria-current="page" >Главная</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/profile'}><a className="nav-link">Личный кабинет</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/login'}><a className="nav-link">Регистрация</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/add'}><a className="nav-link">Добавить объявление</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/search'}><a className="nav-link">Поиск по объявлениям</a></Link>
                            </li>
                        </ul>


                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search"/>
                            <button className="btn btn-primary" onClick="">Поиск</button>
                        </form>
                    </div>
                </nav>
            </nav>
        </div>
);
};

export default Header;