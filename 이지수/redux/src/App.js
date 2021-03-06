import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Page, Result, List, Cart } from './routers';
import { Header } from './components';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/page' component={Page} />
                <Route path='/result' component={Result} />
                <Route path='/list' component={List} />
                <Route path='/cart' component={Cart} />
            </Switch>
        </BrowserRouter>
    )
};

export default App;
