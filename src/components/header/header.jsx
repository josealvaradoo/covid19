import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import EDcontainer from './../grid/ed-container'
import EDitem from '../grid/ed-item'
import AppTitle from '../typography/app-title.'

const Header = ({className}) => (
	<header className={`header m-t-1 ${className}`}>
		<EDcontainer sMain="center">
			<EDitem sMain="center">
				<AppTitle>Coronavirus <span className="title-1--primary">Venezuela</span></AppTitle>
			</EDitem>
		</EDcontainer>
	</header>
)

Header.propTypes = {
	className: PropTypes.string
}

Header.defaultProps = {
	className: ""
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Header)