import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({color, children, size, className, ...rest}) => (
	<span className={`badge--${size} ${color} ${className}`} {...rest}>{children}</span>
);

Badge.defaultProps = {
	size: "medium",
	color: "primary",
	children: "",
	className: ""
}

Badge.propTypes = {
	size: PropTypes.oneOf(["small", "medium"]),
	color: PropTypes.oneOf(["primary", "success", "danger", "warning"]),
	children: PropTypes.node,
	className: PropTypes.string
}

export default Badge