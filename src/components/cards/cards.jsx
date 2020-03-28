import React from 'react'
import PropTypes from 'prop-types'
import Button from '../buttons/button'

const Card = ({className, children, image, link}) => (
	<div className={`card ${className}`} style={{backgroundImage: `url(${image})`}}>
		<Button link to={link} className="button--card">
			{children}
		</Button>
	</div>
);

Card.defaultProps = {
	className: "",
	children: "",
	image: ""
}

Card.propTypes = {}

export default Card