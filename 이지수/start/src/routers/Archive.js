import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import ArchiveNavigation from '../components/ArchiveNavigation'
import Profit from './archive/Profit'
import Review from './archive/Review'

const Archive = () => {

    return (
        <>
            <h1>사업 실적</h1>
            <ArchiveNavigation />
            <Switch>
                <Route path='/archive/profit' component={Profit} />
                <Route path='/archive/review' component={Review} />
                <Redirect path='/archive/*' to='/archive/profit' />
            </Switch>
        </>
    )
}

export default Archive
