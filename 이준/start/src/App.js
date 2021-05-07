import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './routers/Home';
import Main from './routers/Main';
import List from './routers/List';
import Board from './routers/Board';
import Navigation from './components/Navigation';
import Detail from './routers/Detail';

const App = () => {
	return (
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route path="/" exact={true} component={Home} />
				<Route path="/main" component={Main} />
				<Route path="/board" component={Board} />
				<Route path="/detail/:board_id" component={Detail} />
				<Route path="/list/:name" component={List} />
				<Redirect path="*" to="/" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;