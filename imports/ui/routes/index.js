import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BidPage from './BidPage.js';
import Login from './Login.js';
import Register from './Register.js';
import AccountPage from './AccountPage.js';

export default() => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={BidPage}/>
			<Route path="/profile" exact component={AccountPage}/>
			<Route path="/login" exact component={Login}/>
			<Route path="/register" exact component={Register}/>
		</Switch>
	</BrowserRouter>
);
