import React from 'react'
import {connect} from 'react-redux'
import Router from './router'
import Header from './components/header/header'
import Drawer from './components/drawer/drawer'
import Notification from './components/notifications/notification'
import Navbar from './components/navbar/navbar'

const App = ({menuIsOpen, notification}) => (
	<div className="App">
	<Header />
	{notification.code && <Notification />}
	<Router />
	<Navbar />
	</div>
)

const mapStateToProps = state => ({
	menuIsOpen: state.menu,
	notification: state.notification
})

export default connect(mapStateToProps)(App)