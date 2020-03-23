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
				<DrawerItem icon="notes-medical" to="/">Vista general</DrawerItem>
				{/* <DrawerItem icon="chart-bar" to="/graphics">Gráfica</DrawerItem> */}
				{
					user
					? <DrawerItem icon="user" to="/logout">Cerrar sesión</DrawerItem>
					: <DrawerItem icon="user" to="/login">Iniciar sesión</DrawerItem>
				}
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