import React from 'react'
import PropTypes from 'prop-types'

const EDContainer = ({children, full, className}) => (
	<div className={`ed-container ${full && 'full'} ${className}`}>{children}</div>
);

EDContainer.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
	full: PropTypes.bool
}

EDContainer.defaultProps = {
	className: "",
	children: "",
	full: false
}

export default EDContainer