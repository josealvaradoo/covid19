import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = ({component: Component, auth, ...rest}) => (
	auth
	? <Route component={Component} {...rest} />
	: <Redirect to="/login" />
);

const mapStateToProps = state => ({
	auth: state.user
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute)