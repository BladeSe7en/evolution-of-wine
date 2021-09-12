//import React, { useEffect, useRef, useState } from 'react';
import React, { useState, useEffect } from 'react';
import LoadingBox from '../../UtilityComponents/LoadingBox/LoadingBox';
import MessageBox from '../../UtilityComponents/MessageBox/MessageBox';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import NavBarMini from '../../NavBarComponents/NavBarMini/NavBarMini';
import { signin } from './SignInActions';
import SideSearchBar from '../../NavBarComponents/SideSearchBar/SideSearchBar';
import { toggleSideBar } from '../../NavBarComponents/SideSearchBar/SideSearchBarActions';


const SignIn = (props) => {
    const { loading, error } = useSelector((state) => state.Home);
    const { user } = useSelector((state) => state.SignIn);
    const { sideBarOpened } = useSelector((state) => state.SideSearchBar);

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    };

    useEffect(() => {
        if (user._id) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, user]);

    useEffect(() => {
        console.log('testing in home')
        dispatch(toggleSideBar(true))
    }, [])

    return (
            <div className='signin-container' >
            <SideSearchBar />
                    <div className={`${sideBarOpened ? 'sudo-background-white-opened' : 'sudo-background-white-closed'}`}>
            <div>
                <form className="form" onSubmit={submitHandler}>
                    <div>
                        <h1>Sign In</h1>
                    </div>
                    {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant='danger'> {error} </MessageBox>}
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label />
                        <button className="primary" type="submit"> Sign In  </button>
                    </div>
                    <div>
                        <label />
                        <div>
                            New customer? <Link to="/register">Create your account</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default SignIn;






