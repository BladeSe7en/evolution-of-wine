import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import ImageLoader from '../ImageLoader/ImageLoader';
import Rating from '../Rating/Rating';

export default function Product(props) {
    const { product } = props;
    return (
        <div key={product._id} className="card">
            <Link to ={`/product/${product._id}`}>
            <LazyLoad >
                    <ImageLoader className="medium" src={product.image} alt={product.name} />
                </LazyLoad>
            </Link>
            <div className="card-body">
                <Link to ={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews} ></Rating>
                <div className="price">${product.price}</div>
            </div>
        </div>
    );
}
