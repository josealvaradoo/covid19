import React from 'react'
import PropTypes from 'prop-types'
import Button from './button';

const FloatButton = ({color, children, link, to, onClick}) => (
	<Button color={color} className="float" design="circle" link to={to} onClick={onClick}>{children}</Button>
);

FloatButton.defaultProps = {
	color: "primary",
	children: "",
	link: false,
	to: "",
	onClick: () => {}
}

FloatButton.propTypes = {
	color: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.any,
	link: PropTypes.bool,
	to: PropTypes.string
}

export default FloatButton