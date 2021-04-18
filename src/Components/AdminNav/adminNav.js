import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { signout } from '../SignIn/SignInActions';


const AdminNav = (props) => {
    const [change, setChange] = useState(true);
    let returns = 'Returns & Orders'
    const { user } = useSelector(state => state.SignIn);
    const dispatch = useDispatch();

    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);


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


    return (
        <div className={`sticky-wrapper${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
            <nav id="hamnav"  >
                <div className='small-screen-nav'>

                    <label htmlfor="hamburger">&#9776;</label>
                    <div className="hamburger-dropdown">
                        <input type="checkbox" id="hamburger" className="dropbtn" />
                        <div className="burger-dropdown-content">
                        <Link to="/dashboard" >
                            <button className='nav-btn' onClick={() => setChange(!change)}> Dashboard  </button>
                        </Link>
                        <Link to="/productlist">
                            <button className='nav-btn' onClick={() => setChange(!change)}> Products </button>
                        </Link>
                        <Link to="/adminOrderList">
                            <button className='nav-btn' onClick={() => setChange(!change)}> All Orders  </button>
                        </Link>
                        </div>
                    </div>

                </div>

                <div id="hamitems">
                    <Link to="/" id='home' className='home-icon'>
                        <img src={'/images/black-home-icon.png'} className="home-icon" alt="logo" />
                    </Link>
                    <div id='nav-buttons' className='nav-btn-container'>
                        <Link to="/dashboard" >
                            <button className='nav-btn no-width' onClick={() => setChange(!change)}> Dashboard  </button>
                        </Link>
                        <Link to="/productlist">
                            <button className='nav-btn no-width' onClick={() => setChange(!change)}> Products </button>
                        </Link>
                        <Link to="/adminOrderList">
                            <button className='nav-btn no-width' onClick={() => setChange(!change)}> All Orders  </button>
                        </Link>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default AdminNav;


