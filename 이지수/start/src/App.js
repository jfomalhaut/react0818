import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Intro from './routers/Intro'
import History from "./routers/History"
import Ceo from './routers/Ceo'
import Navigation from './components/Navigation'

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path="/intro" exact={true} component={Intro} />
                <Route path="/history" component={History} />
                <Route path="/ceo" component={Ceo} />
                <Redirect path="*" to="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
