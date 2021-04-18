import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../LoadingBox/LoadingBox';
import MessageBox from '../MessageBox/MessageBox';
import { updateUser, userUpdateReset } from './UserEditScreenActions';
import { getUser } from './UserEditScreenActions'

export default function UserEditScreen(props) {
    const { userEditLoading, userEditError, userEditSuccess, selectedUser } = useSelector((state) => state.UserEditScreen);
    const { loading, error } = useSelector((state) => state.Home);
    const userId = props.match.params.id;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const { user } = useSelector((state) => state.SignIn);

    useEffect(() => {
        console.log('this is isAdmin: ',isAdmin)
    }, [isAdmin]);


    const dispatch = useDispatch();
    useEffect(() => {
        if (userEditSuccess) {
            dispatch(userUpdateReset());
            props.history.push('/userlist');
        }
        if (selectedUser.name === '') {
            dispatch(getUser(userId, user))
        } else {
            setName(selectedUser.name)
            setEmail(selectedUser.email)
            setIsAdmin(selectedUser.isAdmin)
        }

    }, [dispatch, props.history, userEditSuccess, userId, user, selectedUser]);

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch update user
        dispatch(updateUser( userId, user, name, email, isAdmin ));
    };
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Edit User {name}</h1>
                    {loading && <LoadingBox></LoadingBox>}
                    {error && (
                        <MessageBox variant="danger">{error}</MessageBox>
                    )}
                </div>
                {userEditLoading ? (
                    <LoadingBox />
                ) : userEditError ? (
                    <MessageBox variant="danger">{userEditError}</MessageBox>
                ) : (
                    <>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} >
                            </input>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} >
                            </input>
                        </div>
                        <div>
                            <label htmlFor="isAdmin">Is Admin</label>
                            <input
                                id="isAdmin"
                                type="checkbox"
                                checked={isAdmin}
                                onChange={(e) => setIsAdmin(e.target.checked)} >
                            </input>
                        </div>
                        <div>
                            <button type="submit" className="primary">
                                Update
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}
