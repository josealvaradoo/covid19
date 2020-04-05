import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import EDcontainer from './../grid/ed-container'
import EDitem from '../grid/ed-item'
import AppTitle from '../typography/app-title.'
import Button from './../buttons/button'
import Viewport from '../../helpers/viewport'
import GoogleAnalytics from '../../helpers/google-analytics'

const Header = ({className}) => {
	const [buttonHidden, hideButton] = useState(false)

	useEffect(() => {
		if(Viewport.isInStandaloneMode()) {
			hideButton(true)

			GoogleAnalytics.event('visit_from_pwa', {
				event_category: 'PWA',
				event_label: 'Visit from PWA',
				event_action: 'visit from pwa'
			})
		}
	}, [])

	const installPWA = () => {
		if (window.deferredPrompt) {
			window.deferredPrompt.prompt()
		
			window.deferredPrompt.userChoice.then(choiceResult => {
				if(choiceResult.outcome === "accepted") {
					hideButton(true)
					
					GoogleAnalytics.event('install_pwa', {
						event_category: 'PWA',
						event_label: 'Install PWA',
						event_action: 'install pwa'
					})
				}
			})
		}

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