import React from 'react'
import PropTypes from 'prop-types'

const Typography = ({variant, align, className, children, ...rest}) => (
	variant === "label"
		? <label className={`typography--${variant} text-${align} ${className}`} {...rest}>{children}</label>
		: <p className={`typography--${variant} text-${align} ${className}`} {...rest}>{children}</p>
);

Typography.defaultProps = {
	align: "left",
	variant: "text",
	className: "",
	children: ""
}

Typography.propTypes = {
	align: PropTypes.oneOf(["left", "right", "center", "justify"]),
	variant: PropTypes.oneOf(["text", "title", "figure", "figure--xl", "subtitle", "description", "placeholder", "label"]),
	className: PropTypes.string,
	children: PropTypes.node.isRequired
}

export default Typography