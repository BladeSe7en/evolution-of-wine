//import React, { useEffect, useRef, useState } from 'react';
import React, { useState, useEffect } from 'react';
import LoadingBox from '../LoadingBox/LoadingBox';
import MessageBox from '../MessageBox/MessageBox';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import NavBarMini from '../NavBarMini/NavBarMini';
import { signin } from './SignInActions';


const SignIn = (props) => {
    const { loading, error } = useSelector((state) => state.Home);
    const { user } = useSelector((state) => state.SignIn);
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


    return (
        <div className='signin-container' >
            <NavBarMini />
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
    );
}

export default SignIn;






