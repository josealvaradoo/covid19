import React from 'react'
import PropTypes from 'prop-types'

const Spinner = ({className}) => <div className={`spinner ${className}`}></div>

Spinner.propTypes = {
	className: PropTypes.string
}

Spinner.defaultProps = {
	className: ""
}

export default Spinner