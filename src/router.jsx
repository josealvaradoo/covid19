import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import ProtectedRoute from './middleware/protected-route'
import Home from './pages/home'
import Dashboard from './pages/admin/dashboard'
import Login from './pages/login'
import Logout from './pages/logout'
import FeaturedRegion from './pages/featured'

const Router = props => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/logout" component={Logout} />
			<Route exact path="/region/:region" component={FeaturedRegion} />
			<ProtectedRoute exact path="/admin/dashboard" component={Dashboard} />
		</Switch>
	</BrowserRouter>
);

export default Router