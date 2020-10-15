import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Login, Page1, Page2 } from './routers';
import { GuardRoute } from './guards';

const App = () => {
	const logged = useSelector(({ authReducer }) => {
		return authReducer.logged;
	});

	useEffect(() => {
		console.log(logged);
	}, [logged]);
	
	return (
		<BrowserRouter>
			<Switch>
				{/* <Route path="/page1" render={(props) => (
					<>
						{logged ? (
							<Page1 {...props} />
						) : (
							<Redirect to="/login" />
						)}
					</>
				)} /> */}
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
