import React from 'react'
import PropTypes from 'prop-types'

const Span = ({variant, align, className, children, ...rest}) => (
	<span className={`span--${variant} text-${align} ${className}`} {...rest}>{children}</span>
);

Span.defaultProps = {
	align: "left",
	variant: "text",
	className: "",
	children: ""
}

Span.propTypes = {
	align: PropTypes.oneOf(["left", "right", "center", "justify"]),
	variant: PropTypes.oneOf(["text", "title", "figure", "subtitle", "description", "placeholder"]),
	className: PropTypes.string,
	children: PropTypes.node.isRequired
}

export default Span