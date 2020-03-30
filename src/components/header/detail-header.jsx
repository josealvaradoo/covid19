import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import EDcontainer from './../grid/ed-container'
import EDitem from '../grid/ed-item'

const DetailHeader = ({children, className, image}) => (
	<header className={`detail-header ${className}`} style={{backgroundImage: `url(${image})`}}>
		<EDcontainer sMain="center">
			<EDitem sMain="center">
				<p>{children}</p>
			</EDitem>
		</EDcontainer>
	</header>
)

DetailHeader.propTypes = {
	children: PropTypes.string.isRequired,
	className: PropTypes.string,
	image: PropTypes.string.isRequired
}

DetailHeader.defaultProps = {
	children: "",
	className: "",
	image: ""
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(DetailHeader)