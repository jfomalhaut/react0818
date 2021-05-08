import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Company from './routers/Company'
import Business from "./routers/Business"
import Archive from './routers/Archive'
import Navigation from './components/Navigation'
import Board from "./routers/Board"
import Detail from './routers/Detail'

const App = () => {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path="/company" component={Company} />
                <Route path="/business" component={Business} />
                <Route path="/archive" component={Archive} />
                <Route path="/board" component={Board} />
                <Route path="/detail/:board_id" component={Detail} />
                <Redirect path='/company/*' to='/company' />
            </Switch>
        </Router>
    )
}

export default App;
