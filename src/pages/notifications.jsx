import React, { useEffect, useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import VenezuelaMap from '../components/map/venezuela-map'
import CasesService from '../services/CasesService'
import Header from './../components/header/header'
import Card from '../components/cards/cards'
import Item, { ItemContent, ItemHeading } from '../components/items/item'
import EDGrid from '../components/grid/ed-grid'
import EDcolumn from '../components/grid/ed-column'
import Carrousel, { CarrouselItem } from '../components/carrousel/carrousel'
import EDContainer from '../components/grid/ed-container'
import EDitem from '../components/grid/ed-item'
import Typography from '../components/typography/typography'
import Badge from '../components/badge/badge'
import Span from '../components/typography/span'

const Notifications = ({user}) => {
	const [cases, setCases] = useState([])
	const [total, setTotalCases] = useState(0)

	useEffect(() => {
		(async () => {
			/*
			if(cases.length === 0) {
				let _total = 0
				const data = await CasesService.fetchData()

				data.map(elem => _total += Number(elem.cases))

				setCases(data)
				setTotalCases(_total)
			}
			*/
		})()
	}, [])

	return (
		<>
		<Header />
		<EDContainer>
			<EDitem className="m-b-1">
				<Typography variant="subtitle">
					<Badge color="primary" size="small" style={{marginRight: '.25rem'}} />
					7 nuevos casos confirmados
				</Typography>
				<Typography variant="description" style={{marginTop: '-.25rem'}}>
					3 en Bolivar, 2 en Amazonas y 2 en Falcon
					<Span variant="description" style={{marginLeft: '.25rem'}}>(3min ago)</Span>
				</Typography>
			</EDitem>
			<EDitem className="m-b-1">
				<Typography variant="subtitle">
					<Badge color="primary" size="small" style={{marginRight: '.25rem'}} />
					7 nuevos casos confirmados
				</Typography>
				<Typography variant="description" style={{marginTop: '-.25rem'}}>
					3 en Bolivar, 2 en Amazonas y 2 en Falcon
					<Span variant="description" style={{marginLeft: '.25rem'}}>(3min ago)</Span>
				</Typography>
			</EDitem>
			<EDitem className="m-b-1">
				<Typography variant="subtitle">
					<Badge color="primary" size="small" style={{marginRight: '.25rem'}} />
					7 nuevos casos confirmados
				</Typography>
				<Typography variant="description" style={{marginTop: '-.25rem'}}>
					3 en Bolivar, 2 en Amazonas y 2 en Falcon
					<Span variant="description" style={{marginLeft: '.25rem'}}>(3min ago)</Span>
				</Typography>
			</EDitem>
			<EDitem className="m-b-1">
				<Typography variant="subtitle">
					<Badge color="primary" size="small" style={{marginRight: '.25rem'}} />
					7 nuevos casos confirmados
				</Typography>
				<Typography variant="description" style={{marginTop: '-.25rem'}}>
					3 en Bolivar, 2 en Amazonas y 2 en Falcon
					<Span variant="description" style={{marginLeft: '.25rem'}}>(3min ago)</Span>
				</Typography>
			</EDitem>
		</EDContainer>
		</>
	)
}

Notifications.defaultProps = {
	user: null
}

Notifications.propTypes = {
	user: PropTypes.any
}

const mapStateToProps = state => ({
	user: state.user
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)