import React from 'react';

// React routing imports
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '../pages/mainPage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ MainPage } />
            <Redirect from='*' to='/' />
        </Switch>
    </BrowserRouter>
);

export default Routes;