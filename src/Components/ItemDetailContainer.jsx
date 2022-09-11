import React, { useEffect, useState } from 'react';
import { productos } from '../mock/Productos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [items, setItems] = useState({});

    useEffect(() => {
        const getProductos = () =>
            new Promise((resolve) => {
                const producto = productos.find((prod) => prod.id === 1);
                setTimeout(() => {
                    resolve(producto);
                }, 500);
            });

        getProductos()
            .then((info) => {
                setItems(info);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail items={items} />
        </div>
    );
};

export default ItemDetailContainer;