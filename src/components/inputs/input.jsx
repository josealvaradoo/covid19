import React from 'react'
import PropTypes from 'prop-types'

const Input = ({name, placeholder, type, onChange, border, shadow, className, defaultValue}) => (
	<input
		type={type}
		name={name}
		placeholder={placeholder}
		autoComplete="off"
		onChange={onChange}
		defaultValue={defaultValue}
		className={`input ${border && 'border'} ${shadow && 'shadow'} ${className}`} />
);

Input.defaultProps = {
	type: "text",
	name: "name",
	placeholder: "",
	border: false,
	shadow: false,
	className: "",
	defaultValue: "",
	onChange: () => {}
}

Input.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	border: PropTypes.bool,
	shadow: PropTypes.bool,
	className: PropTypes.string,
	defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onChange: PropTypes.func
}

export default Input