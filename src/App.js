import React from 'react'
import {connect} from 'react-redux'
import Router from './router'
import Notification from './components/notifications/notification'
import Navbar from './components/navbar/navbar'

const App = ({menuIsOpen, notification}) => (
	<div className="App">
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