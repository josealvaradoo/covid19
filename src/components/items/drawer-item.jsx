import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icons/icon'

const DrawerItem = ({children, icon, to}) => (
	<div className="drawer-list__item">
		<a href={to}>
			<Icon icon={icon} />
			{children}
		</a>
	</div>
);

DrawerItem.defaultProps = {
	children: "",
	icon: "user",
	to: "/"
}

DrawerItem.propTypes = {
	children: PropTypes.any,
	icon: PropTypes.string,
	to: PropTypes.string
}

export default DrawerItem