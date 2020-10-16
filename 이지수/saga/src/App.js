import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Page1, Page2, Login } from './routers';
import { GuardRoute } from './guards';
import Axios from 'axios';

const App = () => {
    const logged = useSelector(({ authReducer }) => authReducer.logged);

    const checkVerify = () => {
        Axios.post(`http://localhost:4000/verify`).then(
            res => {
                const { data: { verify } } = res;
                console.log(verify)
            });
    }

    useEffect(() => {
        checkVerify();
    }, [])

    return (
        <BrowserRouter>
            <Switch>
                {/* 
                <Route path='/page1' render={(props) => (
                    <>
                    {logged?(
                        <Page1 {...props} />
                    ):(
                        <Redirect to='/login'>
                    )}
                    </>
                )}>
                </Route> 
                */}

                <GuardRoute path='/page1' component={Page1} logged={logged} useLogin={true} />
                <Route path='/page2'>
                    <Page2 />
                </Route>
                <GuardRoute path='/login' component={Login} logged={logged} useLogin={false} />
                <Redirect to='/login' />
            </Switch>
        </BrowserRouter>
    )
};

export default App;
