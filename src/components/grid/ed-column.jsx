import React from 'react'
import PropTypes from 'prop-types'

const EDcolumn = ({sFrom, mFrom, lFrom, sRows, mRows, lRows, sLength, mLength, lLength, className, children}) => (
	<div className={`${className} s-x-${sFrom} m-x-${mFrom} l-x-${lFrom} s-cols-${sLength} m-cols-${mLength} l-cols-${lLength} s-rows-${sRows} m-rows-${mRows} l-rows-${lRows}`}>
		{children}
	</div>
);

EDcolumn.propTypes = {
	sFrom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	mFrom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	lFrom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), 
	sLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	mLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	lLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	sRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	mRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	lRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	className: PropTypes.string,
	children: PropTypes.node.isRequired
}

EDcolumn.defaultProps = {
	sFrom: "",
	mFrom: "",
	lFrom: "", 
	sLength: "",
	mLength: "",
	lLength: "",
	sRows: "",
	mRows: "",
	lRows: "",
	className: "",
	children: ""
}

export default EDcolumn