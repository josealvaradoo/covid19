import React from 'react'
import PropTypes from 'prop-types'

export const ItemHeading = ({children}) => (
	<div className="item-heading">{children}</div>
)

export const ItemContent = ({children}) => (
	<div className="item-content">{children}</div>
)

const Item = ({children, onClick}) => (
	<div className="item" onClick={onClick}>
		{children}	
	</div>
);

Item.defaultProps = {
	children: "",
	onClick: () => {}
}

Item.propTypes = {
	children: PropTypes.any,
	onClick: PropTypes.func
}

export default Item