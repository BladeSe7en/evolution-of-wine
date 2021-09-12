import React, { useEffect } from 'react';
import bcrypt from 'bcryptjs';
import NavBar from '../NavBarComponents/NavBar/NavBar';
import Product from '../ProductComponents/Product/Product';
import LoadingBox from '../UtilityComponents/LoadingBox/LoadingBox';
import MessageBox from '../UtilityComponents/MessageBox/MessageBox';
import { useDispatch, useSelector } from 'react-redux'
import { getImages, listProducts } from './StoreFrontActions';
import SideSearchBar from '../NavBarComponents/SideSearchBar/SideSearchBar';
import { toggleSideBar } from '../NavBarComponents/SideSearchBar/SideSearchBarActions';
import { useHistory } from "react-router-dom";



const StoreFront = (props) => {

    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    const { state } = useSelector((state) => state);
    console.log('this is state: ', state)

    const { loading, products, error, images } = useSelector((state) => state.StoreFront);
    const { sideBarOpened } = useSelector((state) => state.SideSearchBar);
    const dispatch = useDispatch()
    const history = useHistory();


    useEffect(() => {
        let test = history.location.pathname
        console.log('testing: ',test)
        console.log('testing in cart')
        dispatch(toggleSideBar(true))
    }, [dispatch])


    useEffect(() => {
        let test = history.location.pathname
        console.log('testing: ',test)
        console.log('testing in cart')
        dispatch(toggleSideBar(true))
    }, [dispatch])
    useEffect(() => {
        console.log('password: ', bcrypt.hashSync('1234', 8))
        dispatch(getImages())
        dispatch(listProducts())
    }, [dispatch]);


    return (
        <div className='home-container' >
            <div className='cart-container background-image' style={{ backgroundImage: `url('/images/wine-barrel-3.jpeg')` }}>
                <div className='sudo-background-black'>
                            <SideSearchBar />
                <div className={`${sideBarOpened ? 'sudo-background-white-opened' : 'sudo-background-white-closed'}`}>
                        <NavBar />

                        <div>
                            {loading ? (<LoadingBox></LoadingBox>) : error ? (<MessageBox variant='danger' >{error} </MessageBox>) : (
                                <div className='row center'>
                                    {console.log('this is products in state: ', products)}
                                    {products[0] && products.map((product) => (
                                        <Product key={product._id} product={product}></Product>
                                    ))}

                                </div>

                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreFront;




// notes

// change all clothing display onto a sperate tab
//  an event calender that schedules a wine tasting event with david
// 