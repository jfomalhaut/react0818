import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { List, Cart, Header } from './routers';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/list" component={List} />
                <Route path="/cart" component={Cart} />
                <Redirect to="/list" />
            </Switch>
        </BrowserRouter>
    )
};

export default App;
