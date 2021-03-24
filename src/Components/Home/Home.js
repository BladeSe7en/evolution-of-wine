import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Product from '../Product/Product';
import LoadingBox from '../LoadingBox/LoadingBox';
import MessageBox from '../MessageBox/MessageBox';
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from './HomeActions';
import bcrypt from 'bcryptjs';



const Home = (props) => {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    const { loading, products, error } = useSelector((state) => state.Home);
    const dispatch = useDispatch()
    const {Cart, Home, NavBarMini, SignIn} = useSelector(state => state)
    
    
    useEffect(() => {
        console.log('testing state: ',Cart, Home, NavBarMini, SignIn)
        console.log('props: ',props.state)

console.log('password: ',bcrypt.hashSync('1234', 8))
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

