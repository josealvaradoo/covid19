import React from 'react'
import PropTypes from 'prop-types'

export const CarrouselItem = ({children, className=""}) => (
	<div className={`carrousel-item ${className}`}>{children}</div>
)

const Carrousel = ({children, className}) => (
	<div className={`carrousel ${className}`}>
		{children}
	</div>
);

Carrousel.defaultProps = {
	children: "",
	className: ""
}

Carrousel.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
}

export default Carrousel