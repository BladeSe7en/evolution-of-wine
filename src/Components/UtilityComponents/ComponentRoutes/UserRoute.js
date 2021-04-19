import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateUserRoute({ component: Component, ...rest }) {
    const { user } = useSelector((state) => state.SignIn);
    return (
        <Route
            {...rest}
            render={(props) =>
                user ? (
                    <Component {...props}></Component>
                ) : (
                    <Redirect to="/signin" />
                )
            }
        ></Route>
    );
}