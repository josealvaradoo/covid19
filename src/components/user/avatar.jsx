import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Image from './../image/image'

const Avatar = ({ image }) => (
	<div className="avatar">
		<Image src={image} />
	</div>
)

Avatar.propTypes = {
	image: PropTypes.string.isRequired
}

Avatar.defaultProps = {
	image: ""
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Avatar)