import React from "react";

const Item = ({nombre, precio, image}) => {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <h5 className="card-title text-center"><b>{nombre}</b></h5>
                <p className="card-text text-center">${precio}</p>
            </div>
        </div>
    )
}

export default Item;