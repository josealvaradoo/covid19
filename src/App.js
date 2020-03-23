import React from 'react'
import {connect} from 'react-redux'
import Router from './router'
import Header from './components/header/header'
import Drawer from './components/drawer/drawer'
import Notification from './components/notifications/notification'

const App = ({menuIsOpen, notification}) => (
	<div className="App">
	<Header />
	{menuIsOpen && <Drawer />}
	{notification.code && <Notification />}
	<Router />
	</div>
)

const mapStateToProps = state => ({
	menuIsOpen: state.menu,
	notification: state.notification
})

export default connect(mapStateToProps)(App)