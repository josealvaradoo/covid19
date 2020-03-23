import React from 'react'
import PropTypes from 'prop-types'

const Emoji = ({children}) => (
	<span role="img" aria-label="Emoji" aria-labelledby="emoji">{children}</span>
);

Emoji.defaultProps = {}

Emoji.propTypes = {
	children: PropTypes.string.isRequired
}

export default Emoji