import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Cart, List, Page1, Page2, Result } from './routers';
import Header from './components/Header';
import { GlobalStyle } from './styled';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			<Switch>
				<Route path="/page1" component={Page1} />
				<Route path="/list" component={List} />
				<Route path="/cart" component={Cart} />
				<Route path="/result" component={Result} />
				<Route path="/page2" render={(props) => (
					<Page2 {...props} />
				)} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;