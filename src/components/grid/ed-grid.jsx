import React from 'react'
import PropTypes from 'prop-types'

const EDGrid = ({children, s, m, l, className}) => (
	<div className={`ed-grid s-grid-${s} m-grid-${m} lg-grid-${l} ${className}`}>{children}</div>
);

EDGrid.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
	s: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	m: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	l: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

EDGrid.defaultProps = {
	className: "",
	children: "",
	s: "",
	m: "",
	l: "",
}

export default EDGrid