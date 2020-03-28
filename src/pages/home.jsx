import React, { useEffect, useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import VenezuelaMap from '../components/map/venezuela-map'
import CasesService from '../services/CasesService'
import Card from '../components/cards/cards'
import Item, { ItemContent, ItemHeading } from '../components/items/item'
import EDGrid from '../components/grid/ed-grid'
import EDcontainer from '../components/grid/ed-container'
import EDcolumn from '../components/grid/ed-column'
import EDitem from '../components/grid/ed-item'
import Carrousel, { CarrouselItem } from '../components/carrousel/carrousel'

const Home = ({user}) => {
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
		<EDGrid m={2}>
			<EDcolumn>
				<VenezuelaMap cases={cases} />
			</EDcolumn>
			<EDcolumn>
				<Item>
					<ItemHeading>Resumen General</ItemHeading>
					<ItemContent className="description">{total} casos confirmados a nivel nacional</ItemContent>
				</Item>
			</EDcolumn>
			<EDcolumn>
				<Carrousel>
					<CarrouselItem>
						<Card image="https://i1.wp.com/mejoreszonas.com/wp-content/uploads/2018/11/Mejores-zonas-donde-alojarse-en-Caracas-Venezuela.jpg?resize=1100,540">Caracas</Card>
					</CarrouselItem>
					<CarrouselItem>
						<Card image="https://i1.wp.com/mejoreszonas.com/wp-content/uploads/2018/11/Mejores-zonas-donde-alojarse-en-Caracas-Venezuela.jpg?resize=1100,540">Nueva Esparta</Card>
					</CarrouselItem>
					<CarrouselItem>
						<Card image="https://i1.wp.com/mejoreszonas.com/wp-content/uploads/2018/11/Mejores-zonas-donde-alojarse-en-Caracas-Venezuela.jpg?resize=1100,540">Delta Amacuro</Card>
					</CarrouselItem>
					<CarrouselItem>
						<Card image="https://i1.wp.com/mejoreszonas.com/wp-content/uploads/2018/11/Mejores-zonas-donde-alojarse-en-Caracas-Venezuela.jpg?resize=1100,540">Los Roques</Card>
					</CarrouselItem>
					<CarrouselItem>
						<Card image="https://i1.wp.com/mejoreszonas.com/wp-content/uploads/2018/11/Mejores-zonas-donde-alojarse-en-Caracas-Venezuela.jpg?resize=1100,540">Caracas</Card>
					</CarrouselItem>
				</Carrousel>
			</EDcolumn>
		</EDGrid>
		</>
	)
}

Home.defaultProps = {
	user: null
}

Home.propTypes = {
	user: PropTypes.any
}

const mapStateToProps = state => ({
	user: state.user
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home)