import React from 'react'
import {connect} from 'react-redux'
import EDcontainer from './../grid/ed-container'
import EDitem from '../grid/ed-item'
import AppTitle from '../typography/app-title.'

const Header = ({}) => (
	<header className="header">
		<EDcontainer sMain="center">
			<EDitem sMain="center">
				<AppTitle>Coronvairus <span className="title-1--primary">Venezuela</span></AppTitle>
			</EDitem>
		</EDcontainer>
	</header>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Header)