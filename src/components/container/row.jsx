import React from 'react'
import PropTypes from 'prop-types'

const Row = ({main, cross, className, children, direction}) => (
	<div className={`row ${className} main-${main} cross-${cross} direction-${direction}`}>{children}</div>
);

Row.propTypes = {
	main: PropTypes.oneOf(["start", "center", "end", "justify", "distribute", ""]),
	cross: PropTypes.oneOf(["start", "center", "end", "justify", "distribute", ""]),
	direction: PropTypes.oneOf(["row", "column", "row-reverse", "column-reverse"]),
	className: PropTypes.string,
	children: PropTypes.node.isRequired
}

Row.defaultProps = {
	main: "",
	cross: "",
	className: "",
	direction: "row",
	children: ""
}

export default Row