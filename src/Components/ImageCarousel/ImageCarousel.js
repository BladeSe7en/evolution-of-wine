import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Product from '../Product/Product';
import LoadingBox from '../LoadingBox/LoadingBox';
import MessageBox from '../MessageBox/MessageBox';
import { useDispatch, useSelector } from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const ImageCarousel = (props) => {
    console.log('thi')
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    const { loading, products, error } = useSelector((state) => state.Home);
    const dispatch = useDispatch()



    return (
        <div className='ImageCarousel-container' >
                {loading ? (<LoadingBox></LoadingBox>) : error ? (<MessageBox variant='danger' >{error} </MessageBox>) : (
                    <div className='row center'>
                        { products.map((product) => (
                            <Product key={product._id} product={product}></Product>
                        ))}
                    </div>
                )}
                <Carousel>
                <div>
                    <img src={props.src} alt = {props.alt} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={props.src} alt = {props.alt}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={props.src} alt = {props.alt}/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
}

export default ImageCarousel;



