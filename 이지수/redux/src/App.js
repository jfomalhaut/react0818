import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header, Page, Result } from './routers';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/page' component={Page} />
                <Route path='/result' component={Result} />
            </Switch>
        </BrowserRouter>
    )
};

export default App;
