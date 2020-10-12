import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Page1, Page2 } from './routers';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/page1' render={(props) => (
                    <Page1 {...props} />
                )}>
                </Route>
                <Route path='/page2'>
                    <Page2 />
                </Route>
                <Redirect to='/page1' />
            </Switch>
        </BrowserRouter>
    )
};

export default App;
