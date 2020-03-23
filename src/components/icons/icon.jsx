import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({type, icon, size}) => (
	<i className={`${type} fa-${icon} fa-${size}x`}></i>
);

Icon.defaultProps = {
	type: "fa",
	icon: "user",
	size: 1
}

Icon.propTypes = {
	type: PropTypes.oneOf(["fa", "far", "fal", "fas"]),
	icon: PropTypes.string,
	size: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
}

export default Icon