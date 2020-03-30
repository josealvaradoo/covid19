import React from 'react'
import PropTypes from 'prop-types'

const EDContainer = ({
	children,
	full,
	className,
	sMain,
	mMain,
	lgMain,
	sCross,
	mCross,
	lgCross}) => (
	<div className={`ed-container ${full && 'full'} ${className} s-main-${sMain} m-main-${mMain} lg-main-${lgMain} s-cross-${sCross}
	m-cross-${mCross} lg-cross-${lgCross}`}>{children}</div>
);

EDContainer.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
	full: PropTypes.bool,
	sMain: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	mMain: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	lgMain: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	sCross: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	mCross: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	lgCross: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

EDContainer.defaultProps = {
	className: "",
	children: "",
	full: false,
	sMain: "",
	mMain: "",
	lgMain: "",
	sCross: "",
	mCross: "",
	lgCross: ""
}

export default EDContainer