import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Product from '../Product/Product';
import LoadingBox from '../LoadingBox/LoadingBox';
import MessageBox from '../MessageBox/MessageBox';
import { useDispatch, useSelector } from 'react-redux'
import { getOrders, listProducts } from './HomeActions';
import bcrypt from 'bcryptjs';



const Home = (props) => {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    const { loading, products, error, orders } = useSelector((state) => state.Home);
    const dispatch = useDispatch()
    const {Cart, Home, NavBarMini, SignIn} = useSelector(state => state)
    
    
    useEffect(() => {
        console.log('testing state: ',Cart, Home, NavBarMini, SignIn)
        console.log('props: ',props.state)

console.log('password: ',bcrypt.hashSync('1234', 8))
        dispatch(listProducts())
        dispatch(getOrders())
    }, [dispatch]);



    return (
        <div className='home-container' >
            <div className='cart-container background-image' style={{ backgroundImage: `url('/images/wine-barrel-3.jpeg')` }}>
                <div className='sudo-background-black'>
                <div className='sudo-background-white'>
            <NavBar />
            
            <div>
                
                {loading ? (<LoadingBox></LoadingBox>) : error ? (<MessageBox variant='danger' >{error} </MessageBox>) : (
                    <div className='row center'>
                        {console.log('this is products in state: ',products)}
                        { products[0] && products.map((product) => (
                            <Product key={product._id} product={product}></Product>
                        ))}
                        
                        {/* { orders.map((product) => (
                            <Product key={product._id} product={product}></Product>
                        ))} */}
                    
                    </div>
                    
                )}
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Home;

