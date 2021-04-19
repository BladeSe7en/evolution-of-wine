import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../../UtilityComponents/LoadingBox/LoadingBox';
import MessageBox from '../../UtilityComponents/MessageBox/MessageBox';
import NavBarMini from '../../NavBarComponents/NavBarMini/NavBarMini';
import { updateUserProfile } from '../SignIn/SignInActions';
import { profileReset, userDetails } from './UserProfileActions';


const UserProfile = () => { 

    const { loading, error } = useSelector((state) => state.Home);
    const { user } = useSelector((state) => state.SignIn);
    const { updateLoading, updateError, updateSuccess } = useSelector((state) => state.UserProfile)

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');





    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(userDetails(user));
    }, [dispatch, user._id]);


    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch update profile
        if (password !== confirmPassword) {
            alert('Password and Confirm Password Do Not Match');
        } else {
            dispatch(profileReset())
            dispatch(updateUserProfile( user, name, email, password ));
        }
    };


    return (
        <div>
            <NavBarMini />
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>User Profile</h1>
                </div>
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <>
                        {updateLoading && <LoadingBox></LoadingBox>}
                        {updateError && (
                            <MessageBox variant="danger">{updateError}</MessageBox>
                        )}
                        {updateSuccess && (
                            <MessageBox variant="success">
                                Profile Updated Successfully
                            </MessageBox>
                        )}
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">confirm Password</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Enter confirm password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label />
                            <button className="primary" type="submit">
                                Update
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}

export default UserProfile