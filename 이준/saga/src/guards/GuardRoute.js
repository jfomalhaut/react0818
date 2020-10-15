import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const GuardRoute = ({ component: Component, useLogin, logged, ...res}) => {
	const flag = useLogin ? logged : !logged;
	const url = useLogin ? "/login" : "/page1";
	return (
		<Route {...res} render={(props) => (
			flag ? (
				<Component {...props} />
			) : (
				<Redirect to={url} />
			)
		)} />
	);
};

export default GuardRoute;