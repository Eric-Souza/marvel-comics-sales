import React from 'react';
import {Redirect, BrowserRouter, Switch, Route} from 'react-router-dom';

import MainPage from '../pages/mainPage';
import FinalPage from '../pages/finalPage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/'      component={ MainPage } />
            <Route exact path='/final' component={ FinalPage } />
            <Redirect from='*' to='/' />
        </Switch>
    </BrowserRouter>
);

export default Routes;