import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect (()=> {
        const productos = [
            { "id": 1, "nombre": "Bidon 20 lts", "precio": 550, "descripcion": "Bidón retornable de agua x 20 litros", "image": "../img/Bidon-retornable-de-agua-x-20-litros.jpg" },
            { "id": 2, "nombre": "Bidon 10 lts", "precio": 300, "descripcion": "Bidón retornable de agua x 10 litros", "image": "https://sodayaguastrubolini.com.ar/wp-content/uploads/2017/04/Bidon-retornable-de-agua-x-10-litros.jpg" },
            { "id": 3, "nombre": "Bidon 8 lts", "precio": 250, "descripcion": "Bidón descartable de agua x 8 litros", "image": "https://sodayaguastrubolini.com.ar/wp-content/uploads/2017/04/Bidon-descartable-de-agua-x-8-litros.jpg" },
            { "id": 4, "nombre": "Sifon plastico", "precio": 100, "descripcion": "Sifón plástico retornable de soda x 1,25 litros", "image": "https://sodayaguastrubolini.com.ar/wp-content/uploads/2017/04/Sifon-plastico-de-soda-x-1-25-litros.jpg"},
            { "id": 5, "nombre": "Sifon vidrio", "precio": 90, "descripcion": "Sifón vidrio retornable de soda x 1 litro", "image": "https://sodayaguastrubolini.com.ar/wp-content/uploads/2017/04/Sifon-de-vidrio-de-soda-x-1-litro.jpg" },
        ];
       setItems(productos);

        const getProductos = new Promise ((resolve)=> {
            setTimeout (()=> {
                resolve(productos);
            }, 2000);
        });
        getProductos.then ((respuesta)=> {
            setItems(respuesta);
        });
    },[]);

    return (
        <div className="container">
            <ItemList items ={items}/>
        </div>
    )
}

export default ItemListContainer;