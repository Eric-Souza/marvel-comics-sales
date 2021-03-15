import React from 'react';

// React routing imports
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '../pages/mainPage';
import CharPage from '../pages/CharPage/charPage';
import ComicPage from '../pages/ComicPage/comicPage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/main' component={ MainPage } />
            <Route exact path='/characters' component={ CharPage } />
            <Route exact path='/comics' component={ ComicPage } />

            <Redirect from='*' to='/main' />
        </Switch>
    </BrowserRouter>
);

export default Routes;