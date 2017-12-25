import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BidPage from './BidPage.js';
import AccountPage from './AccountPage.js';

export default() => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={BidPage}/>
			<Route path="/profile" exact component={AccountPage}/>
		</Switch>
	</BrowserRouter>
);
