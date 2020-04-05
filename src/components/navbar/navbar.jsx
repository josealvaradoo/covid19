import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import EDGrid from '../grid/ed-grid'
import Image from './../image/image'
import homeSVG from './../../assets/images/home.svg'
import graphicSVG from './../../assets/images/graphic.svg'
import bellSVG from './../../assets/images/bell.svg'
import userSVG from './../../assets/images/user.svg'
import EDitem from '../grid/ed-item'

const Navbar = ({user, keyboardOnFocus, virtualKeyboardIsOpen}) => {
	const [hide, setState] = useState(false)

	useEffect(() => {
		setState(keyboardOnFocus)
	}, [keyboardOnFocus])

	return (
		<div className={`navbar ${(virtualKeyboardIsOpen && hide) && 'keyboard-is-onfocus'}`}>
			<EDGrid s={4}>
				<Link to="/">
					<EDitem sm={12} sMain="center" sCross="center" className="navbar__item">
						<Image src={homeSVG} />
					</EDitem>
				</Link>
				<Link to="/stats">
					<EDitem sm={12} sMain="center" sCross="center" className="navbar__item">
						<Image src={graphicSVG} />
					</EDitem>
				</Link>
				<Link to="/notifications">
					<EDitem sm={12} sMain="center" sCross="center" className="navbar__item">
						{/* <Badge>2</Badge> */}
					<Image src={bellSVG} />
					</EDitem>
				</Link>
				<Link to={user ? '/admin' : '/login'}>
					<EDitem sm={12} sMain="center" sCross="center" className="navbar__item">
						<Image src={userSVG} />
					</EDitem>
				</Link>
			</EDGrid>
		</div>
	)
}

Navbar.defaultProps = {}

Navbar.propTypes = {}

const mapStateToProps = state => ({
	user: state.user,
	virtualKeyboardIsOpen: state.application.viewport.virtualKeyboardIsOpen,
	keyboardOnFocus: state.application.keyboardOnFocus
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)