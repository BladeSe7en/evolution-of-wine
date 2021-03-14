import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import LoadingBox from '../LoadingBox/LoadingBox';
import MessageBox from '../MessageBox/MessageBox';
import { useDispatch, useSelector } from 'react-redux'


const OrdersReturns = () => {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    const { loading, products, error } = useSelector((state) => state.Home);
    const dispatch = useDispatch()





    return (
        <div className='signin-container' >
            <NavBar />
            <div>
                
                {loading ? (<LoadingBox></LoadingBox>) : error ? (<MessageBox variant='danger' >{error} </MessageBox>) : (
                    <div className='row center height'>
                        <h1> Orders and Returns Page Not Built Yet</h1>
                    </div>
                )}
                <footer className='row center'>All rights reserved</footer>
            </div>
        </div>
    );
}

export default OrdersReturns;

