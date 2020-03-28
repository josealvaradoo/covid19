import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({color, children, className}) => (
	<div className={`badge ${color} ${className}`}>{children}</div>
);

Badge.defaultProps = {
	color: "primary",
	children: "",
	className: ""
}

Badge.propTypes = {
	color: PropTypes.oneOf(["primary", "success", "danger", "warning"]),
	children: PropTypes.any,
	className: PropTypes.string
}

export default Badge