import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers, deleteUser } from './ListAllUsersActions';

export default function UserListScreen(props) {
    const { allUsersLoading, allUsersError, allUsers, deleteUserSuccess, deleteUserError, deleteUserLoading } = useSelector((state) => state.ListAllUsers);
    const { user } = useSelector((state) => state.SignIn);
    const { loading, error } = useSelector((state) => state.Home);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listUsers(user));
    }, [dispatch, deleteUserSuccess]);

    const deleteHandler = (user) => {
        if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
            dispatch(deleteUser(user._id));
        }
    };

    let admins = allUsers.filter((user) => user.isAdmin)
    let users = allUsers.filter((user) => !user.isAdmin)

    return (
                <div >
                    <div className='tables-display'>
                        <h1 className='center-text'> All Admins </h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>IS ADMIN</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {admins.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                                        <td>
                                            <button 
                                                type="button"
                                                className="small"
                                                onClick={() => props.history.push(`/user/${user._id}/edit`)}>
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                className="small"
                                                onClick={() => deleteHandler(user)} >
                                                Delete
                                    </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className='tables-display'>
                        <h1 className='center-text'> All Users </h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>IS ADMIN</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                                        <td>
                                            <button 
                                                type="button"
                                                className="small"
                                                onClick={() => props.history.push(`/user/${user._id}/edit`)}>
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                className="small"
                                                onClick={() => deleteHandler(user)} >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
    );
}
