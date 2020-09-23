import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Page1, Page2, Result } from './routers';
import { GlobalStyle } from './styled';

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <ul>
                <li>
                    <Link to="/page1">Page1</Link>
                </li>
                <li>
                    <Link to="/page2">Page2</Link>
                </li>
                <li>
                    <Link to="/result">Result</Link>
                </li>
                <li>
                    <Link to="/list">List</Link>
                </li>                <li>
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
            <Switch>
                <Route path='/page1' component={Page1} />
                <Route path='/page2' render={(props) => (
                    <Page2 {...props} />)} />
                <Route path='/result' component={Result} />
                <Route path='/list' component={List} />
                <Route path='/cart' component={Cart} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
