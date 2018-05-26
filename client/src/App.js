import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Login from './pages/Login.js';
import Build from './pages/Build.js';

export default class App extends Component {

	render() {
		return (
			<BrowserRouter>
					<Switch>
						<Route exact path="/" component={() => <Login  />} />
						<Route exact path="/login" component={() => <Login  />} />
						<Route exact path="/logout" component={() => <Login />} />
						<Route exact path="/build" component={() => <Build  />} />
					</Switch>
			</BrowserRouter>
		);
	}
}