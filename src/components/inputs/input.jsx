import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { setOnFocusKeyboard } from '../../redux/ducks/applicaton';

const Input = ({name, placeholder, type, onChange, border, shadow, className, defaultValue, disabled, handleKeyboardFocus}) => (
	<>
	<input
		type={type}
		name={name}
		placeholder={placeholder}
		autoComplete="off"
		onChange={onChange}
		defaultValue={defaultValue}
		disabled={disabled}
		onFocus={() => handleKeyboardFocus(true)}
		onBlur={() => handleKeyboardFocus(false)}
		className={`input ${border && 'border'} ${shadow && 'shadow'} ${className} ${disabled && 'disabled'}`.replace("false", "")} />
	</>
)

Input.defaultProps = {
	type: "text",
	name: "name",
	placeholder: "",
	border: false,
	shadow: false,
	disabled: false,
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
	disabled: PropTypes.bool,
	className: PropTypes.string,
	defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onChange: PropTypes.func
}

const mapStateToProps = state => ({
	viewport: state.application.viewport
})

const mapDispatchToProps = dispatch => ({
	handleKeyboardFocus(state) {
		dispatch(setOnFocusKeyboard(state))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Input)