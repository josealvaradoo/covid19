import React from "react";
import PropTypes from "prop-types";

const EDitem = ({
	children,
	s,
	m,
	lg,
	sOrder,
	mOrder,
	lgOrder,
	sMain,
	mMain,
	lgMain,
	sCross,
	mCross,
	lgCross,
	container,
	className
}) => (
	<div
		className={`ed-item ${container && "ed-container"} s-${s} m-${m} lg-${lg} s-order-${sOrder}
	m-order-${mOrder} lg-order-${lgOrder} s-main-${sMain} m-main-${mMain} lg-main-${lgMain} s-cross-${sCross}
	m-cross-${mCross} lg-cross-${lgCross} ${className}`}>
		{children}
	</div>
);

EDitem.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
	container: PropTypes.bool,
	s: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	m: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	sOrder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	mOrder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	lgOrder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	sMain: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	mMain: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	lgMain: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	sCross: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	mCross: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	lgCross: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

EDitem.defaultProps = {
	className: "",
	children: "",
	container: false,
	s: "",
	m: "",
	lg: "",
	sOrder: "",
	mOrder: "",
	lgOrder: "",
	sMain: "",
	mMain: "",
	lgMain: "",
	sCross: "",
	mCross: "",
	lgCross: ""
};

export default EDitem;
