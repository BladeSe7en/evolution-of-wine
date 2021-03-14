import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { updateTotalCartItems } from '../Cart/CartActions';


const NavBarMini = () => {
    const [change, setChange] = useState(true);
    let returns = 'Returns & Orders'
    const { user } = useSelector(state => state.SignIn);
    const { cartItems, totalItemsOrdered } = useSelector(state => state.Cart);
    const dispatch = useDispatch();

    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);

    useEffect(() => {
        let total = cartItems.length === 0 ? 0 : cartItems.reduce((previousValue, currentValue) => {
            return {
                qty: previousValue.qty + currentValue.qty,
            }
        });
        console.log('total: ',total)
        let sum = total === 0 ? 0 : total.qty
        dispatch(updateTotalCartItems(sum))
    }, [dispatch, cartItems])





    // handle scroll event for navbar
    const handleScroll = (elTopOffset, elHeight) => {
        let offSet = window.pageYOffset
        // (window.location.pathname !== '/') ? offSet = window.pageYOffset : offSet = window.pageYOffset

        if (offSet-20 > (elTopOffset + elHeight)) {
            setSticky({ isSticky: true, offset: elHeight });
        } else {
            setSticky({ isSticky: false, offset: 0 });
        }

    };

    // add/remove scroll event listener for navbar scroll
    useEffect(() => {
        console.log('window.location: ', window.location.pathname)
        var header = headerRef.current.getBoundingClientRect();
        console.log('header: ', header)
        const handleScrollEvent = () => {
            handleScroll(header.top, header.height)
        }

        window.addEventListener('scroll', handleScrollEvent);

        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };

    }, []);

    return (
        <div className='nav-container'>
            <div className={`sticky-wrapper${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
                <div className='nav-btn-header'>
                    <Link to="/" id='home' className='home-icon'>
                        <img src={'/images/home-icon.png'} className="home-icon" alt="logo" />
                        {/* <button className="btn"onClick={this.returnToMainPage}>Main Page</button> */}
                    </Link>

                    <div id='ship-to' className='deliver-to'>
                        <h1>Deliver to:</h1>
                        <h1>{user.address}</h1>
                    </div>

                    <div id='search' className='search-bar'>
                        <div className="dropdown">
                            <button className="dropbtn">All <img src={'/images/chevron_down.png'} className="chevron" alt="logo" /></button>
                            <div className="dropdown-content">
                                <a href="#">Category 1</a>
                                <a href="#">Category 2</a>
                                <a href="#">Category 3</a>
                            </div>
                        </div>
                        <input></input>
                        <div>
                            <button className='nav-btn' onClick={() => setChange(!change)}> <img className='search-icon' src={'/images/seach_icon.png'} /> </button>
                        </div>
                    </div>

                    <div id='nav-buttons' className='nav-btn-container'>
                        <Link to="/signin"  >
                            <button className='nav-btn' onClick={() => setChange(!change)}> Sign In </button>
                        </Link>
                        <Link to="/orders-returns"  >
                            <button className='nav-btn' onClick={() => setChange(!change)}> {returns}  </button>
                        </Link>
                        <Link to="/cart"  >
                            <button className='nav-btn' onClick={() => setChange(!change)}>
                                Cart {totalItemsOrdered > 0 && <span className='badge'>{totalItemsOrdered}</span>}
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default NavBarMini;
