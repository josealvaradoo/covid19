import React from 'react'
import PropTypes from 'prop-types'

const Image = ({src, alt, className, width, maxWidth}) => (
	src && <img src={src} alt={alt} className={`image ${className}`} style={{width: `${width}%`, maxWidth: maxWidth ? `${maxWidth}px` : 'auto'}}/>
)

Image.defaultProps = {
	src: "",
	alt: "",
	width: 100,
	className: ""
}

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	width: PropTypes.number,
	maxWidth: PropTypes.any,
	className: PropTypes.string
}

export default Image