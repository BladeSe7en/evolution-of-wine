import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Product from '../Product/Product';
import axios from 'axios';
import LoadingBox from '../LoadingBox/LoadingBox';
import MessageBox from '../MessageBox/MessageBox';
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from './HomeActions';
import ImageLoader from '../ImageLoader/ImageLoader';
import LazyLoad from 'react-lazy-load';



const Home = () => {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    const { loading, products, error } = useSelector((state) => state.Home);
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);



    return (
        <div className='home-container' >
            <NavBar />
            <div>
                
                {loading ? (<LoadingBox></LoadingBox>) : error ? (<MessageBox variant='danger' >{error} </MessageBox>) : (
                    <div className='row center'>
                        { products.map((product) => (
                            <Product key={product._id} product={product}></Product>
                        ))}
                    </div>
                )}
                <footer className='row center'>All rights reserved</footer>
            </div>
        </div>
    );
}

export default Home;

