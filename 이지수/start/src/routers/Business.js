import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import BusinessNavigation from '../components/BusinessNavigation'
import Vision from './business/Vision'
import Cooperation from './business/Cooperation'

const Business = () => {
    return (
        <BrowserRouter>
            <h1>사업 소개</h1>
            <BusinessNavigation />
            <Switch>
                <Route path='/business/vision' component={Vision} />
                <Route path='/business/cooperation' component={Cooperation} />
                <Redirect path='/business/*' to='/business/vision' />
            </Switch>
        </BrowserRouter>
    )
}

export default Business
