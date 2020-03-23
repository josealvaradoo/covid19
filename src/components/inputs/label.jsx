import React from 'react'
import PropTypes from 'prop-types'

const Label = ({children, htmlFor, className}) => (
	<label className={`label${className}`} htmlFor={htmlFor}>{children}</label>
);

Label.defaultProps = {
	className: ""
}

Label.propTypes = {
	htmlFor: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
	className: PropTypes.string
}

export default Label