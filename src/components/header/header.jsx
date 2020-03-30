import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import EDcontainer from './../grid/ed-container'
import EDitem from '../grid/ed-item'
import AppTitle from '../typography/app-title.'
import Button from './../buttons/button'
import Viewport from '../../helpers/viewport'

const Header = ({className}) => {
	const [buttonHidden, hideButton] = useState(false)

	useEffect(() => {
		if(Viewport.isInStandaloneMode()) hideButton(true)
	}, [])

	const installPWA = () => {
		window.deferredPrompt.prompt()
		
		window.deferredPrompt.userChoice.then(choiceResult => {
			if(choiceResult.outcome === "accepted") {
				hideButton(true)
			}
		})

		window.addEventListener('appinstalled', event => {
			hideButton(true)
		})
	}

	return (
		<header className={`header m-t-1 ${className}`}>
			<EDcontainer sMain="center">
				<EDitem container sMain={!buttonHidden ? 'justify' : 'center'} sCross="center">
					<AppTitle>Coronavirus<span className="title-1--primary">Venezuela</span></AppTitle>
					{!buttonHidden && <Button size="smallest" onClick={installPWA}>Instalar</Button>}
				</EDitem>
			</EDcontainer>
		</header>
	)
}

Header.propTypes = {
	className: PropTypes.string
}

Header.defaultProps = {
	className: ""
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Header)