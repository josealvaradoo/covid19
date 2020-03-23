import React from 'react'
import {connect} from 'react-redux'
import {toggleMenu} from './../../redux/ducks/menu'
import BurgerMenu from './../buttons/burger'

const Header = ({toggle}) => (
	<header className="header">
		COVID-19 en Venezuela
		<BurgerMenu onClick={toggle} />
	</header>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	toggle() {
		dispatch(toggleMenu())
	} 
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)