import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import AuthenticationService from '../services/AuthenticationService';
import { Redirect } from 'react-router-dom';

const Logout = () => {
	const [redirect, setRedirectState] = useState(false)
	
	useEffect(() => {
		(async () => {
			const data = await AuthenticationService.signOut()
			setRedirectState(data)
		})()
	}, [])

	return redirect && <Redirect to="/" />
}

Logout.defaultProps = {}

Logout.propTypes = {}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Logout)