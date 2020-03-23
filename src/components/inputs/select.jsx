import React from 'react'
import PropTypes from 'prop-types'

const Select = ({name, placeholder, options, onChange, border, shadow, className}) => (
	<select
		name={name}
		onChange={onChange}
		className={`select ${border && 'border'} ${shadow && 'shadow'} ${className}`}>
		<option value="">{placeholder}</option>
		{
			options.map((option, key) => <option value={option.value} key={key}>{option.label}</option>)
		}
	</select>
);

Select.defaultProps = {
	name: "name",
	placeholder: "Selecciona un elemento",
	border: false,
	shadow: false,
	className: "",
	options: [],
	onChange: () => {}
}

Select.propTypes = {
	name: PropTypes.string,
	placeholder: PropTypes.string,
	border: PropTypes.bool,
	shadow: PropTypes.bool,
	className: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
	onChange: PropTypes.func
}

export default Select