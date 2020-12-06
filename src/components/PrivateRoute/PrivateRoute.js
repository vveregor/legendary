import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, path, exact }) => {

    const auth = !!localStorage.userId

    return (
        <Route
            path={path}
            exact={exact}
            render={() => (auth ? <Component /> : <Redirect to="/login" />)}
        />
    );
};

export default PrivateRoute;