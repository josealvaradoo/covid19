import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Header from './../components/header/header'
import EDContainer from '../components/grid/ed-container'
import EDitem from '../components/grid/ed-item'
import Typography from '../components/typography/typography'
import Alert from '../components/alerts/alert'

const Graphics = ({user}) => {
	return (
		<>
		<Header />
		<EDContainer sMain="center">
			<EDitem sMain="center"  className="m-t-4">
				<Alert><Typography align="center">Proximamente</Typography></Alert>
			</EDitem>
		</EDContainer>
		</>
	)
}

Graphics.defaultProps = {}

Graphics.propTypes = {}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Graphics)