import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import NavBarMini from '../NavBarMini/NavBarMini';


const NavBar = () => {


    return (
        <div className='nav-container'>
            <div className='logo-header'>
                <img src={'/images/Evolution-of-Wine-Logo1.png'} className="logo" alt="logo" />
            </div>
            <NavBarMini />
        </div>
    );
}

export default NavBar;
