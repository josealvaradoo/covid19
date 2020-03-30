import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import AuthenticationService from '../services/AuthenticationService';
import { Redirect } from 'react-router-dom';

const Logout = ({user}) => {
	const [redirect, setRedirectState] = useState(false)
	
	useEffect(() => {
		(async () => {
			if(user) {
				await AuthenticationService.signOut()
			}
			
			localStorage.clear()
			setRedirectState(true)
		})()
	}, [])

	return redirect && <Redirect to="/" />
}

Logout.defaultProps = {}

Logout.propTypes = {}

const mapStateToProps = state => ({
	user: state.user
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Logout)