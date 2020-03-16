import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

import Home from './pages/home';
import Concepts from './pages/concepts';
import Problems from './pages/problems';
import Resources from './pages/resources';
import Sidebar from './components/sidebar';
import routes from './routes';

import 'bulma/css/bulma.css';
import './styles.scss';

function App() {
	return (
		<Router>
			<div className="fullpage has-background-dark">
				<div className="columns">
					<div className="column is-one-fifth has-background-light is-fullwidth">
						<Sidebar links={routes} />
					</div>
					<div className="column has-background-white">
						<Switch>
							<Route path="/concepts">
								<Concepts />
							</Route>
							<Route path="/problems">
								<Problems />
							</Route>
							<Route path="/resources">
								<Resources />
							</Route>
							<Route path="/home">
								<Home />
							</Route>
							<Route path="/">
								<Redirect to="/home" />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
