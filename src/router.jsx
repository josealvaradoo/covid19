import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import ProtectedRoute from './middleware/protected-route'
import Navbar from './components/navbar/navbar'
import Home from './pages/home'
import Graphics from './pages/graphics'
import Login from './pages/login'
import Logout from './pages/logout'
import Notifications from './pages/notifications'
import Resumen from './pages/resumen'
import DetailRegion from './pages/detail'
import Dashboard from './pages/admin/dashboard'
import AgeDistribution from './pages/admin/age-distribution'
import GenderDistribution from './pages/admin/gender-distribution'
import DeathAndHealted from './pages/admin/death-and-healted-distribution'

const Router = props => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/stats" component={Graphics} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/notifications" component={Notifications} />
			<Route exact path="/resumen" component={Resumen} />
			<Route exact path="/detail/:region" component={DetailRegion} />
			<ProtectedRoute exact path="/admin" component={Dashboard} />
			<ProtectedRoute exact path="/admin/age" component={AgeDistribution} />
			<ProtectedRoute exact path="/admin/gender" component={GenderDistribution} />
			<ProtectedRoute exact path="/admin/death-and-healted" component={DeathAndHealted} />
			<ProtectedRoute exact path="/logout" component={Logout} />
		</Switch>
		<Navbar />
	</BrowserRouter>
);

export default Router