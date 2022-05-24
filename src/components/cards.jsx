import React from 'react';
import {useEffect, useState} from 'react';
import Card from "./card";


const Cards = () => {
    function my_request(pets, setPets){

        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+localStorage.token);
        myHeaders.append("Content-Type", "application/json");
        let requestOptions = {
            method: 'GET',
            headers: myHeaders //+body если существует
        };
        fetch("http://pets.сделай.site/api/pets", requestOptions)
            .then(response=>response.json())
            .then(response=>setPets(response))
            }
    let [pets, setPets]=useState({data:{orders:[]}})
    useEffect(()=>my_request(pets, setPets), [pets])
    let cards=pets.data.orders.map((pet, index)=><Card pet={pet} key={index}/>)
    return (
        <div className='d-flex flex-row flex-wrap'>
            {cards}

        </div>
    );
};

export default Cards;