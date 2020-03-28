import React from 'react'
import PropTypes from 'prop-types'

const Divider = ({margin, spacing}) => (
	<div className={`divider--${margin}--${spacing}`}></div>
);

Divider.propTypes = {
	margin: PropTypes.number,
	spacing: PropTypes.number
}

Divider.defaultProps = {
	margin: 0,
	spacing: 0
}

export default Divider