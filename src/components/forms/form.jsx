import React from 'react'
import PropTypes from 'prop-types'

const Form = ({children, onSubmit, className}) => (
	<form onSubmit={onSubmit} className={`${className} form`}>
		{children}
	</form>
)

Form.defaultProps = {
	children: "",
	className: "",
	onSubmit: () => {}
}

Form.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	onChange: PropTypes.func
}

export default Form