import React, { useEffect } from 'react';
import bcrypt from 'bcryptjs';
import NavBar from '../NavBarComponents/NavBar/NavBar';
import Product from '../ProductComponents/Product/Product';
import LoadingBox from '../UtilityComponents/LoadingBox/LoadingBox';
import MessageBox from '../UtilityComponents/MessageBox/MessageBox';
import { useDispatch, useSelector } from 'react-redux'
import { getImages, listProducts } from './HomeActions';



const Home = (props) => {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    const { loading, products, error, images } = useSelector((state) => state.Home);
    const dispatch = useDispatch()
    
    
    useEffect(() => {
console.log('password: ',bcrypt.hashSync('1234', 8))
        dispatch(getImages())
        dispatch(listProducts())
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
                        { images[0] && images.map((image) => (
                            console.log('mapped image: ',image)
                        ))}
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

