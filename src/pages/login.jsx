import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Form from '../components/forms/form';
import FormGroup from '../components/forms/form-group';
import Input from '../components/inputs/input';
import Button from '../components/buttons/button';
import coronavirusPNG from './../assets/images/coronavirus.png'
import Image from '../components/image/image';
import AuthenticationService from '../services/AuthenticationService';
import { Redirect } from 'react-router-dom';
import EDGrid from '../components/grid/ed-grid';
import EDContainer from '../components/grid/ed-container';
import EDitem from '../components/grid/ed-item';

const Login = ({error, user}) => {
	const signIn = async (e) => {
		if(!user) {
			e.preventDefault()
			const email = e.target.email.value
			const passw = e.target.password.value

			await AuthenticationService.signIn(email, passw)
			return false
		}
	}

	return !user ? (
		<EDGrid s={1}>
			<EDContainer>
				<EDitem sMain="center">
					<Image src={coronavirusPNG} alt="Coronavirus" width={80} maxWidth={300} className="coronavirus-login" />
				</EDitem>
			</EDContainer>
			<EDitem container full sMain="center">
				<EDitem m={40}>
					<Form onSubmit={signIn}>
						<FormGroup>
							<Input type="email" name="email" placeholder="E-mail" border />
						</FormGroup>
						<FormGroup>
							<Input type="password" name="password" placeholder="Contraseña" border />
						</FormGroup>
						<FormGroup>
							<Button type="submit" color="primary" full>Iniciar sesion</Button>
						</FormGroup>
					</Form>
				</EDitem>
			</EDitem>
		</EDGrid>
	) : <Redirect to="/" />
}

Login.defaultProps = {
	user: null
}

Login.propTypes = {
	user: PropTypes.any
}

const mapStateToProps = state => ({
	error: state.error,
	user: state.user
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Login)