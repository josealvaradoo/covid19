import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Button = ({className, onClick, type, design, color, children, full, ghost, size, link, to}) => (
	link ? (
		<Link
			to={to}
			className={`button ${className} ${design} ${color} ${full && 'full'} ${ghost && 'ghost'} ${size}`}>
				{children}
		</Link>
	): (
		<button
			type={type}
			className={`button ${className} ${design} ${color} ${full && 'full'} ${ghost && 'ghost'} ${size}`}
			onClick={onClick}>
				{children}
		</button>
	)
);

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	design: PropTypes.oneOf(['raised', 'flat', 'circle']),
	color: PropTypes.oneOf(['primary', 'success', 'warning', 'danger']),
	size: PropTypes.oneOf(['normal', 'small', 'large']),
	children: PropTypes.any,
	full: PropTypes.bool,
	ghost: PropTypes.bool,
	type: PropTypes.string,
	link: PropTypes.bool,
	to: PropTypes.string
}

Button.defaultProps = {
	className: "",
	onClick: () => console.log("Clicked!"),
	design: 'raised',
	color: 'primary',
	size: 'normal',
	children: "",
	full: false,
	ghost: false,
	type: "button",
	link: false,
	to: ""
}

export default Button