import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Page1, Page2, Result } from './routers';
import Header from './components/Header';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/page1" component={Page1} />
				<Route path="/result" component={Result} />
				<Route path="/page2" render={(props) => (
					<Page2 {...props} />
				)} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;