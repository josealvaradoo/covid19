import React from 'react'
import PropTypes from 'prop-types'

const AppTitle = ({ children, className }) => (
	<div className={`title-1 ${className}`}>{children}</div>
);

AppTitle.defaultProps = {
	children: "",
	className: ""
}

AppTitle.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
}

export default AppTitle