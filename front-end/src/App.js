import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import ListAssetComponent from './component/asset/ListAssetComponent';
import AddAssetComponent from './component/asset/AddAssetComponent';
import EditAssetComponent from './component/asset/EditAssetComponent';
import UserLoginComponent from './component/asset/UserLoginComponent';

function App() {
	const authenticated = localStorage.getItem('authenticated') === 'true';

	return (
		<div className="container">
			<Router>
				<div className="col-md-6">
					<h1 className="text-center" style={style}>On-Track Asset CRUD</h1>
					<Switch>
						<Route exact path="/" render={() => <Redirect to="/login" />} />
						<Route exact path="/login" component={UserLoginComponent} />
						<Route
							exact
							path="/assets"
							render={({ history }) =>
								authenticated ? (
									<ListAssetComponent history={history} />
								) : (
									<Redirect to="/login" />
								)
							} />
						<Route
							exact
							path="/add-asset"
							render={({ history }) =>
								authenticated ? (
									<AddAssetComponent history={history} />
								) : (
									<Redirect to="/login" />
								)
							} />
						<Route
							exact
							path="/edit-asset"
							render={({ history }) =>
								authenticated ? (
									<EditAssetComponent history={history} />
								) : (
									<Redirect to="/login" />
								)
							} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

const style = {
	color: 'red',
	margin: '10px'
}

export default App;
