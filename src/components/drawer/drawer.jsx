import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {toggleMenu} from './../../redux/ducks/menu'
import DrawerList from '../lists/drawer-list'
import DrawerItem from '../items/drawer-item'

const Drawer = ({toggle, user}) => (
	<div className="drawer-container" onClick={toggle}>
		<div className="drawer">
			<DrawerList>
				<DrawerItem icon="plus" to="/admin">Agregar nuevos casos</DrawerItem>
				<DrawerItem icon="notes-medical" to="/admin/death-and-healted">Fallecidos y sanados</DrawerItem>
				<DrawerItem icon="chart-bar" to="/admin/age">Distribución por edad</DrawerItem>
				<DrawerItem icon="chart-bar" to="/admin/gender">Distribución por género</DrawerItem>
				<DrawerItem icon="user" to="/profile">Mi perfil</DrawerItem>
				<DrawerItem icon="sign-out" to="/logout">Cerrar sesión</DrawerItem>
			</DrawerList>
		</div>
	</div>
);

Drawer.defaultProps = {
	isOpen: false,
	user: null,
	toggle: () => {}
}

Drawer.propTypes = {
	user: PropTypes.any,
	isOpen: PropTypes.bool,
	toggle: PropTypes.func
}

const mapStateToProps = state => ({
	isOpen: state.menu,
	user: state.user
})

const mapDispatchToProps = dispatch => ({
	toggle() {
		dispatch(toggleMenu())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)