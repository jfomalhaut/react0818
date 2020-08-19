import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from "./routers/Main";
import Main from './routers/Home';
import List from './routers/List';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/main" component={Main} />
                <Route path="/list" component={List} />
                <Redirect path="*" to="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
