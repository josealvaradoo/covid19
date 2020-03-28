import React from 'react'
import PropTypes from 'prop-types'

const Typography = ({variant, className, children}) => (
	variant === "label"
		? <label className={`typography--${variant} ${className}`}>{children}</label>
		: <p className={`typography--${variant} ${className}`}>{children}</p>
);

Typography.defaultProps = {
	variant: "text",
	className: "",
	children: ""
}

Typography.propTypes = {
	variant: PropTypes.oneOf(["text", "title", "figure", "subtitle", "description", "placeholder", "label"])
}

export default Typography