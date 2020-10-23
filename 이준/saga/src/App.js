import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Login, Page1, Page2 } from './routers';
import { GuardRoute } from './guards';
import Axios from 'axios';
import { AuthAction } from './actions';

const App = () => {
	const dispatch = useDispatch();
	const logged = useSelector(({ authReducer }) => {
		return authReducer.logged;
	});

	const checkVerify = () => {
		// Axios.post(`http://localhost:4000/verify`).then(res => {
		// 	const { data: { verify } } = res;
		// 	console.log(verify);
		// });
	};

	const logout = () => {
		dispatch(AuthAction.logout());
	};

	useEffect(() => {
		checkVerify();
	}, []);
	
	return (
		<BrowserRouter>
			{logged && (
				<button onClick={logout}>로그아웃</button>
			)}
			<Switch>
				<GuardRoute path="/login" component={Login} logged={logged} useLogin={false} />
				<GuardRoute path="/page1" component={Page1} logged={logged} useLogin={true} />
				<Route path="/page2">
					<Page2 />
				</Route>
				<Redirect to="/login" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
