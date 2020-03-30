import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({children, className, color, full}) => (
	<div className={`alert--${color} ${className} ${full && "full"}`}>{children}</div>
)

Alert.defaultProps = {
	color: "primary",
	className: "",
	children: "",
	full: false
}

Alert.propTypes = {
	color: PropTypes.oneOf(["primary", "success", "warning", "danger"]),
	className: PropTypes.string,
	children: PropTypes.node,
	full: PropTypes.bool
}

export default Alert