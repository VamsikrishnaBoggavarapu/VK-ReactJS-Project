import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/login';

export const Routes = (
    <Switch>
        <Route path='/' component={Login} />
    </Switch>
);

