import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingBox from '../../UtilityComponents/LoadingBox/LoadingBox';
import MessageBox from '../../UtilityComponents/MessageBox/MessageBox';
import NavBarMini from '../../NavBarComponents/NavBarMini/NavBarMini';
import { register } from './RegisterScreenActions';
import { toggleSideBar } from '../../NavBarComponents/SideSearchBar/SideSearchBarActions';
import SideSearchBar from '../../NavBarComponents/SideSearchBar/SideSearchBar';

export default function RegisterScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { sideBarOpened } = useSelector((state) => state.SideSearchBar);

    const redirect = props.location.search

        ? props.location.search.split('=')[1]
        : '/';
    const { loading, error } = useSelector((state) => state.Home);
    const { user } = useSelector((state) => state.SignIn);

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password and confirm password do not match');
        } else {
            dispatch(register(name, email, password));
        }
    };
    useEffect(() => {
        if (user._id) {
            console.log('redirect: ',redirect)
            props.history.push(redirect);
        }
    }, [props.history, redirect, user]);

    useEffect(() => {
        console.log('testing in home')
        dispatch(toggleSideBar(true))
    }, [])

    return (
        <div>
            <SideSearchBar />
                    <div className={`${sideBarOpened ? 'sudo-background-white-opened' : 'sudo-background-white-closed'}`}>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Create Account</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
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
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Enter confirm password"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Register
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        Already have an account?{' '}
                        <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
}
