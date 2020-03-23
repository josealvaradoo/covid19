import React from 'react'
import PropTypes from 'prop-types'

const Column = ({sFrom, mFrom, lFrom, sRows, mRows, lRows, sLength, mLength, lLength, className, children}) => (
	<div className={`${className} s-x-${sFrom} m-x-${mFrom} l-x-${lFrom} s-cols-${sLength} m-cols-${mLength} l-cols-${lLength} s-rows-${sRows} m-rows-${mRows} l-rows-${lRows}`}>
		{children}
	</div>
);

Column.propTypes = {
	sFrom: PropTypes.number,
	mFrom: PropTypes.number,
	lFrom: PropTypes.number,
	sLength: PropTypes.number,
	mLength: PropTypes.number,
	lLength: PropTypes.number,
	sRows: PropTypes.number,
	mRows: PropTypes.number,
	lRows: PropTypes.number,
	className: PropTypes.string,
	children: PropTypes.node.isRequired
}

Column.defaultProps = {
	className: "",
	children: ""
}

export default Column