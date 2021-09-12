import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from './CartActions';
import { useDispatch, useSelector } from 'react-redux'
import NavBarMini from '../../NavBarComponents/NavBarMini/NavBarMini';
import { Link } from 'react-router-dom';
import MessageBox from '../../UtilityComponents/MessageBox/MessageBox';
import { toggleSideBar } from '../../NavBarComponents/SideSearchBar/SideSearchBarActions';
import SideSearchBar from '../../NavBarComponents/SideSearchBar/SideSearchBar';

export default function CartScreen(props) {

    const { sideBarOpened } = useSelector((state) => state.SideSearchBar);

    const productId = props.match.params.id;
    const dispatch = useDispatch()
    const { cartItems } = useSelector((state) => state.Cart)
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 0;

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

  


    const removeFromCartHandler = (id) => {
        // delete action
        dispatch(removeFromCart(id))
    };


    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    };


    return (
        <div className='cart-container  background-image' style={{ backgroundImage: `url('/images/wine-barrel-3.jpeg')` }}>
                <div className='sudo-background-black'>
                <SideSearchBar />
                    <div className={`${sideBarOpened ? 'sudo-background-white-opened' : 'sudo-background-white-closed'}`}>
                <div className='row top'>
                    <div className='coll-2'>
                        {cartItems.length === 0 ? (
                            <MessageBox>
                                Cart is empty. <Link to='/'>Go Shopping</Link>
                            </MessageBox>
                        ) : (
                            <ul className='border'>
                                {cartItems.map((item) => (
                                    <li key={item._id}>
                                        <div id='cart-item-grid'>
                                            <div id='item-icon'>
                                                <img src={item.image[0]} alt={item.name} className='small' />
                                            </div>
                                            <div id='item-name' className='min-30'>
                                                <Link to={`/product/${item._id}`}>{item.name}</Link>
                                            </div>
                                            <div id='item-quantity-selector'>
                                                <select className='quantity-selector' value={item.qty} onChange={(e) => dispatch(addToCart(item._id, Number(e.target.value)))} >
                                                    {[...Array(item.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}> {x + 1} </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div id='item-price'>${item.price}</div>
                                            <div>
                                                <button id='item-delete' type='button' onClick={() => removeFromCartHandler(item._id)} > Delete </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='coll-1'>
                        <div className='card card-body'>
                            <ul>
                                <li>
                                    <h2>
                                        Subtotal ({cartItems.reduce((acumulator, currentItem) => acumulator + currentItem.qty, 0)} items) : $ {cartItems.reduce((acumulator, currentItem) => acumulator + currentItem.price * currentItem.qty, 0)}
                                    </h2>
                                </li>
                                <li>
                                    <button type='button' onClick={checkoutHandler} className='primary block' disabled={cartItems.length === 0} > Proceed to Checkout </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
