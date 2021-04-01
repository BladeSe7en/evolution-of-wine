import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { updateTotalCartItems } from '../Cart/CartActions';
import { signout } from '../SignIn/SignInActions';


const NavBarMini = (props) => {
    const [change, setChange] = useState(true);
    let returns = 'Returns & Orders'
    const { user } = useSelector(state => state.SignIn);
    const { cartItems, totalItemsOrdered, shippingAddress } = useSelector(state => state.Cart);
    const dispatch = useDispatch();

    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);

    useEffect(() => {
        let total = cartItems.length === 0 ? 0 : cartItems.reduce((previousValue, currentValue) => {
            return {
                qty: previousValue.qty + currentValue.qty,
            }
        });
        console.log('total: ', total)
        let sum = total === 0 ? 0 : total.qty
        dispatch(updateTotalCartItems(sum))
    }, [dispatch, cartItems])





    // handle scroll event for navbar
    const handleScroll = (elTopOffset, elHeight) => {
        let offSet = window.pageYOffset
        // (window.location.pathname !== '/') ? offSet = window.pageYOffset : offSet = window.pageYOffset

        if (offSet > (elTopOffset + elHeight)) {
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


    const signoutHandler = () => {
        dispatch(signout())
    }


    let homeIcon 
    useEffect((props) => {
        props.match.path === '/shipping' ? homeIcon = '/images/black-home-icon.png' : homeIcon = '/images/home-icon-white.png'
        console.log('props.match.path: ',props.match.path)
    },[props])

    return (
        <div className={`sticky-wrapper${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
            <nav id="hamnav"  >
                <div className='small-screen-nav'>

                    <label htmlfor="hamburger">&#9776;</label>
                    <div className="hamburger-dropdown">
                        <input type="checkbox" id="hamburger" className="dropbtn" />
                        <div className="burger-dropdown-content">
                            <a href="example.com">Category 1</a>
                            <a href="example.com">Category 2</a>
                            <a href="example.com">Category 3</a>
                        </div>
                    </div>

                    <div id='mini-search' className='search-bar'>
                        <div className="dropdown">
                            <button className="dropbtn">All <img src={'/images/chevron_down.png'} className="chevron" alt="logo" /></button>
                            <div className="dropdown-content">
                                <a href="example.com">Category 1</a>
                                <a href="example.com">Category 2</a>
                                <a href="example.com">Category 3</a>
                            </div>
                        </div>
                        <input></input>
                        <div>
                            <button className='nav-btn' onClick={() => setChange(!change)}> <img className='search-icon' src={'/images/white-seach-icon.png'} alt="logo" /> </button>
                        </div>
                    </div>
                </div>

                <div id="hamitems">
                    <Link to="/" id='home' className='home-icon'>
                        <img src={homeIcon} className="home-icon" alt="logo" />
                    </Link>

                    <div id='ship-to' className='deliver-to'>
                        <h1>Deliver to:</h1>
                        <h1>{shippingAddress.address ? shippingAddress.address : ''}</h1>
                    </div>

                    <div id='search' className='search-bar'>
                        <div className="dropdown">
                            <button className="dropbtn">All <img src={'/images/chevron_down.png'} className="chevron" alt="logo" /></button>
                            <div className="dropdown-content">
                                <a href="example.com">Category 1</a>
                                <a href="example.com">Category 2</a>
                                <a href="example.com">Category 3</a>
                            </div>
                        </div>
                        <input></input>
                        <div>
                            <button className='nav-btn' onClick={() => setChange(!change)}> <img className='search-icon' alt='icon' src={'/images/white-seach-icon.png'} /> </button>
                        </div>
                    </div>

                    <div id='nav-buttons' className='nav-btn-container'>
                        {user.name ? (
                            <div className='admin dropdown'>
                                    <button className='nav-btn' onClick={() => setChange(!change)}> {user.name} <i className='fa fa-caret-down'> </i> </button>
                                <ul className = 'admin-dc dropdown-content'>
                                    <Link to = '/' onClick = { signoutHandler } > Sign Out </Link>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/signin"  >
                                <button className='nav-btn' onClick={() => setChange(!change)}> Sign In </button>
                            </Link>
                        )}

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
            </nav>

        </div>
    );
}

export default NavBarMini;


