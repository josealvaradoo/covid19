import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import EDContainer from './../grid/ed-container'
import EDitem from './../grid/ed-item'
import Image from './../image/image'
import Typography from './../typography/typography'
import Avatar from './../user/avatar'
import decoratorSVG from './../../assets/images/decorator.svg'
import settingsSVG from './../../assets/images/settings.svg'
import { toggleMenu } from '../../redux/ducks/menu'

const DashboardHeader = ({user, handleToggleMenu}) => {
	return (
		<header className="dashboard-header">
			<div className="dashboard-header__button" onClick={() => handleToggleMenu()}>
				<Image src={settingsSVG} />
			</div>
			<div className="dashboard-header__decorator-left">
				<Image src={decoratorSVG} />
			</div>
			<EDContainer >
				<EDitem sMain="center">
					<Avatar image={user.avatar} />
				</EDitem>
				<EDitem sMain="center">
					<Typography align="center">¡Hola, {user.firstname}!</Typography>
				</EDitem>
			</EDContainer>
			<div className="dashboard-header__decorator-right">
				<Image src={decoratorSVG} />
			</div>
		</header>
	)
}

DashboardHeader.propTypes = {
	children: PropTypes.any.isRequired
}

DashboardHeader.defaultProps = {
	children: ""
}

const mapStateToProps = state => ({
	user: state.user
})

const mapDispatchToProps = dispatch => ({
	handleToggleMenu() {
		dispatch(toggleMenu())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader)