import React, { useEffect, useState} from 'react'
import {Helmet} from 'react-helmet'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import VenezuelaMap from '../components/map/venezuela-map'
import Header from './../components/header/header'
import Card from '../components/cards/cards'
import Item, { ItemContent, ItemHeading } from '../components/items/item'
import EDGrid from '../components/grid/ed-grid'
import EDcolumn from '../components/grid/ed-column'
import Carrousel, { CarrouselItem } from '../components/carrousel/carrousel'
import Viewport from '../helpers/viewport'
import RegionsService from '../services/RegionsService'
import String from '../helpers/string'
import Spinner from './../components/helpers/spinner'
import {orderBy} from './../helpers/array'

const Home = ({regions, viewport}) => {
	const [total, setTotalCases] = useState(0)
	const [pageLoaded, setPageLoadedState] = useState(false)

	useEffect(() => {
		(async () => {
			if(!pageLoaded) {
				let _total = 0
				const _regions = await RegionsService.fetchData()

				_regions.map(region => _total += Number(region.cases))

				setTotalCases(_total)
				setPageLoadedState(true)
			}
		})()
	}, [pageLoaded])

	return (
		<>
		<Helmet>
			<title>Coronavirus en Venezuela</title>
		</Helmet>
		<Header />
		<EDGrid m={2}>
			<EDcolumn>
				<VenezuelaMap cases={regions} />
			</EDcolumn>
			<EDcolumn>
				<Link to="/resumen">
					<Item className="m-b-1">
						<ItemHeading>Resumen General</ItemHeading>
						<ItemContent className="description">{total} casos confirmados a nivel nacional</ItemContent>
					</Item>
				</Link>
			</EDcolumn>
			<EDcolumn>
				{
					regions
					? (
						<Carrousel className={`${Viewport.isATailScreenSmartphone() && "m-t-1 increased"}`}>
							{
								orderBy(regions, 'name').map((region, key) => (
									<CarrouselItem key={key}>
										<Link to={`/detail/${String.slug(region.name)}`}>
											<Card image={region.image}>{region.name}</Card>
										</Link>
									</CarrouselItem>
								))
							}
						</Carrousel>
					) : (
						<Spinner />
					)
				}
			</EDcolumn>
		</EDGrid>
		</>
	)
}

Home.defaultProps = {
	user: null,
	regions: [],
	viewport: null
}

Home.propTypes = {
	user: PropTypes.any,
	regions: PropTypes.array,
	viewport: PropTypes.object
}

const mapStateToProps = state => ({
	user: state.user,
	regions: state.regions,
	viewport: state.application.viewport
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home)