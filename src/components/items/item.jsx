import React from 'react'
import PropTypes from 'prop-types'

export const ItemHeading = ({children, className = ""}) => (
	<div className={`item-heading ${className}`}>{children}</div>
)

export const ItemContent = ({children, className = ""}) => (
	<div className={`item-content ${className}`}>{children}</div>
)

const Item = ({children, className, onClick}) => (
	<div className={`item ${className}`} onClick={onClick}>
		{children}
		<div className="item-entry"></div>
	</div>
);

Item.defaultProps = {
	children: "",
	className: "",
	onClick: () => {}
}

Item.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	onClick: PropTypes.func
}

export default Item