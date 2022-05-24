import React from 'react';

const CabMain2 = () => {
    return (
        <div>
            <main style={{minHeight: '70vh;'}}>
                <h2 className="text-center text-white bg-primary m-2">Добавленные объявления</h2>
                <div className="d-flex flex-row flex-wrap">
                    <div className="d-flex flex-row flex-wrap border m-3 p-3 position-relative" style={{minWidth: '300px', width: '45%'}}>
                        <img src="../image/pets/кошка.jpg" className="w-75" alt="рисунок животного"/>
                        <p className="w-50 text-primary" style={{minWidth: '250px'}}>id:</p>
                        <p className="w-50" style={{minWidth: '250px'}}>14</p>

                        <p className="w-50 text-primary" style={{minWidth: '250px'}}>Вид животного:</p>
                        <p className="w-50" style={{minWidth: '250px'}}> Кошка</p>

                        <p className="w-50 text-primary" style={{minWidth: '300px'}}>Описание:</p>
                        <p className="w-50" style={{minWidth: '300px'}}>Потерялась кошка, пушистая, серая. Любит играть, ласковая.</p>

                        <p className="w-50 text-primary" style={{minWidth: '300px'}}>Номер чипа:</p>
                        <p className="w-50" style={{minWidth: '300px'}}>ca-001-spb</p>

                        <p className="w-50 text-primary" style={{minWidth: '300px'}}>Район:</p>
                        <p className="w-50" style={{minWidth: '300px'}}>Василиостровский</p>

                        <p className="w-50 text-primary" style={{minWidth: '300px'}}>Дата:</p>
                        <p className="w-50" style={{minWidth: '300px'}}>24-03-2020</p>
                        <div className="position-absolute text-danger" style={{top: '15px', right: '15px', cursor: 'pointer'}}>&#10060;</div>
                        <button type="submit" className="btn btn-primary">Редактировать объявление</button>
                    </div>

                    <div className="d-flex flex-row flex-wrap border m-3 p-3 position-relative" style={{minWidth: '300px; width: 45%'}}>
                        <img src="../image/pets/коза.jpeg" className="w-75" alt="рисунок животного"/>
                        <p className="w-50 text-primary" style={{minWidth: '250px'}}>id:</p>
                        <p className="w-50" style={{minWidth: '250px'}}>18</p>

                        <p className="w-50 text-primary" style={{minWidth: '250px'}}>Вид животного:</p>
                        <p className="w-50" style={{minWidth: '250px'}}> Коза</p>

                        <p className="w-50 text-primary" style={{minWidth: '300px'}}>Описание:</p>
                        <p className="w-50" style={{minWidth: '300px'}}>Потерялась коза, последний раз видели в здании Московского вокзала
                            г. Санкт-Петербург. Коза белая, пуховая.</p>

                        <p className="w-50 text-primary" style={{minWidth: '300px'}}>Номер чипа:</p>
                        <p className="w-50" style={{minWidth: '300px'}}>go-011-spb</p>

                        <p className="w-50 text-primary" style={{minWidth: '300px'}}>Район:</p>
                        <p className="w-50" style={{minWidth: '300px'}}>Центральный</p>

                        <p className="w-50 text-primary" style={{minWidth: '300px'}}>Дата:</p>
                        <p className="w-50" style={{minWidth: '300px'}}>14-03-2022</p>
                        <div className="position-absolute text-danger" style={{top:'15px; right: 15px; cursor: pointer'}}>&#10060;</div>
                        <button type="submit" className="btn btn-primary">Редактировать объявление</button>
                    </div>
                </div>

                <nav aria-label="Page navigation example" className="m-3">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>

                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </main>
        </div>
    );
};

export default CabMain2;