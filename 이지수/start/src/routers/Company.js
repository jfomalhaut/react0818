import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Location from './Location'
import Info from './Info'
import CompanyNavigation from '../components/CompanyNavigation'

const Company = (props) => {
    console.log(props)
    return (
        <>
            <BrowserRouter>
                <h1>회사소개</h1>
                <CompanyNavigation />
                <Switch>
                    <Route path='/company/location' component={Location} />
                    <Route path='/company/info' component={Info} />
                    <Redirect path='/company/*' to='/company/location' />
                </Switch>
            </BrowserRouter>
        </>
    )
};

export default Company

