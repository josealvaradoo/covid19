import React from 'react'
import PropTypes from 'prop-types'
import EDGrid from '../grid/ed-grid'
import Image from './../image/image'
import homeSVG from './../../assets/images/home.svg'
import graphicSVG from './../../assets/images/graphic.svg'
import bellSVG from './../../assets/images/bell.svg'
import userSVG from './../../assets/images/user.svg'
import EDitem from '../grid/ed-item'
import Badge from '../badge/badge'

const Navbar = props => (
	<div className="navbar">
		<EDGrid s={4}>
			<EDitem sm={12} sMain="center" sCross="center" className="navbar__item">
				<Image src={homeSVG} />
			</EDitem>
			<EDitem sm={12} sMain="center" sCross="center" className="navbar__item">
				<Image src={graphicSVG} />
			</EDitem>
			<EDitem sm={12} sMain="center" sCross="center" className="navbar__item">
				<Badge>2</Badge>
				<Image src={bellSVG} />
			</EDitem>
			<EDitem sm={12} sMain="center" sCross="center" className="navbar__item">
				<Image src={userSVG} />
			</EDitem>
		</EDGrid>
	</div>
);

Navbar.defaultProps = {}

Navbar.propTypes = {}

export default Navbar