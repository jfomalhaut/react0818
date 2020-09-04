import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { List } from './routers/';
import './App.css';
import Navigation from './components/Navigation';

const App = () => {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route path="/:category" component={List} />
				<Redirect to="/all" path="*" />
			</Switch>
		</Router>
	);
};

export default App;
