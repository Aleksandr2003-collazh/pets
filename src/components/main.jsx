import React from 'react';
import {Link} from "react-router-dom";
import Cards from "./cards";

const Main = () => {
    return (
        <div>


                <main style={{minHeight:'70vh'}}>
                    <div>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                            Войти
                        </button>

                        <div className="modal fade" id="exampleModal" tabIndex="" aria-labelledby="exampleModalLabel"
                             aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="btn-close" style={{width: '100%'}} data-bs-dismiss="modal"
                                                aria-label="Закрыть"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form action="action_page.php" style={{border: '3px solid #f1f1f1'}}>
                                            <div className="imgcontainer" style={{textAlign: 'center', margin: '24px 0 12px 0'}}>
                                                <img src="img_avatar2.png" alt="Avatar" style={{width: '40%',
                                                    borderRadius: '50%'}} className="avatar"/>
                                            </div>

                                            <div className="container" style={{padding: '16px'}}>
                                                <label htmlFor="uname"><b>Логин</b></label>
                                                <input type="text" placeholder="Впишите логин" name="uname" required style={{width: '100%',
                                                    padding: '12px 20px',
                                                    margin: '8px 0',
                                                    display: 'inline-block',
                                                    border: '1px solid #ccc',
                                                    boxSizing: 'border-box'}}/>

                                                <label htmlFor="psw"><b>Пароль</b></label>
                                                <input type="password" placeholder="Впишите пароль" name="psw"
                                                       required style={{width: '100%',
                                                    padding: '12px 20px',
                                                    margin: '8px 0',
                                                    display: 'inline-block',
                                                    border: '1px solid #ccc',
                                                    boxSizing: 'border-box'}}/>

                                                <button type="submit" style={{
                                                    backgroundColor: '#4CAF50',
                                                    color: 'white',
                                                    padding: '14px 20px',
                                                    margin: '8px 0',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    width: '100%'}}>Войти</button>
                                                <label>
                                                    <input type="checkbox" checked="checked" name="remember"/> Запомнить
                                                    меня
                                                </label>
                                            </div>

                                            <div className="container" style={{backgroundColor:'#f1f1f1'}}>
                                                <span className="psw">Забыли <a href="#">пароль?</a></span>
                                                <span className="psw" data-bs-dismiss="modal">Нет аккаунта? <Link to={'/login'}><a className="nav-link" >Зарегистрируйтесь</a></Link></span>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal" style={{minHeight:'70vh'}}>Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <main style={{minHeight: '70vh'}}>
                            <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
                            <div id="carouselExampleIndicators"
                                 className="carousel slide m-auto bg-success bg-opacity-25 w-75 p-2"
                                 data-bs-ride="carousel" >
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="0" className="active" aria-current="true"
                                            aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="image/pets/собака.jpg" className="d-block" alt="Собака"
                                             style={{width: '300px'}}/>
                                        <h2 className="text-center">Найдена собака</h2>
                                        <p>Собака рыжая, была утеряна в красногвардейчком райне районе</p>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="image/pets/мышь.jpg" className="d-block" alt="Мышь"
                                             style={{width: '300px'}}/>
                                        <h2 className="text-center">Найдена мышь</h2>
                                        <p>Мышь серая, была утеряна в центральном районе</p>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="image/pets/горилла.jpg" className="d-block" alt="Горилла"
                                             style={{width: '300px'}}/>
                                        <h2 className="text-center">Найдена горила</h2>
                                        <p>Горилла, была утеряна в красногвардейчком райне районе</p>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Предыдущий</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Следующий</span>
                                </button>
                            </div>

                            <h2 className="text-center text-white bg-primary m-2">Карточки найденных животных</h2>
                            <Cards/>

                            <h2 className="text-center text-white bg-primary m-2">Подписка на новости</h2>
                            <form className="w-50 m-auto p-3" style={{minWidth: '300px'}}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной
                                        почты</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">Мы никогда не делимся Вашими e-mail ни с
                                        кем.
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary">Подписаться</button>
                            </form>
                        </main>
                        <script src="js/bootstrap.bundle.min.js"></script>
                    </div>
                </main>


        </div>
    );
};

export default Main;