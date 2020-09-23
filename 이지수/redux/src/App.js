import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './routers/Header';
import Page1 from './routers/Page1';
import Page2 from './routers/Page2';
import Result from './routers/Result';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/page1' component={Page1} />
                <Route path='/page2' render={
                    (props) => (
                        <Page2 {...props} />)} />
                <Route path='/result' component={Result} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
