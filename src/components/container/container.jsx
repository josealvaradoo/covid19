import React from 'react'
import PropTypes from 'prop-types'

const Container = ({children, className}) => (
	<div className={`ed-container ${className}`}>{children}</div>
);

Container.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any
}

Container.defaultProps = {
	className: "",
	children: ""
}

export default Container