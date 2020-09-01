import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Company from './routers/Company'
import Business from "./routers/Business"
import Archive from './routers/Archive'
import Navigation from './components/Navigation'

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path="/company" exact={true} component={Company} />
                <Route path="/business" component={Business} />
                <Route path="/archive" component={Archive} />
                <Redirect path='/company/*' to='/company' />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
