import React from 'react';
import { Link } from 'react-router-dom';


const ToysCard = (toy) => {
    const { details, image, name, price, quality, rating, seller_email, seller_name, sub_category, _id } = toy.toy;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{details}</p>
            <div className="card-actions justify-end">
            <Link to={`/toy/${_id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default ToysCard;
