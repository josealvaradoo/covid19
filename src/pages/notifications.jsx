import React, { useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import moment from 'moment'
import Header from './../components/header/header'
import EDContainer from '../components/grid/ed-container'
import EDitem from '../components/grid/ed-item'
import Typography from '../components/typography/typography'
import Badge from '../components/badge/badge'
import Item from '../components/items/item'
import CasesService from '../services/CasesService'
import Spinner from '../components/helpers/spinner'
import String from '../helpers/string'
import Alert from '../components/alerts/alert'

const Notifications = ({regions}) => {
	const [cases, fetchCasesData] = useState([])
	const [pageIsLoaded, setPageLoadesState] = useState(false)

	useEffect(() => {
		(async function() {
			if(!pageIsLoaded) {
				const result = []
				const data = await CasesService.fetchData()

				data.map(row => result.push({ ...row, state: regions.find(region => region.id === row.state_id).name }))

				fetchCasesData(result)
				setPageLoadesState(true)
			}
		})()
	}, [])

	return (
		<>
		<Header />
		<EDContainer className="height--80 scroll--auto s-column">
		{
			pageIsLoaded
			? (
				cases && cases.length > 0 ? cases.map((item, key) => (
					<EDitem key={key} className="m-b-1">
						<Link to={`/detail/${String.slug(item.state)}`}>
							<Item>
								<Typography variant="subtitle">
									<Badge color="primary" size="small" style={{ marginRight: '.5rem' }} />
									{item.cases} nuevos casos confirmados en {item.state}
								</Typography>
								<Typography variant="description" style={{ marginTop: '-.25rem' }}>
									{moment(item.date, "YYYY-MM-DDTh:mm:ss").fromNow()}
								</Typography>
							</Item>
						</Link>
					</EDitem>
				)) : (
					<EDitem sMain="center" className="m-t-4">
						<Alert><Typography>Aun no hay datos cargados</Typography></Alert>
					</EDitem>
				)
			)
			: (
				<EDitem className="m-t-4">
					<Spinner />
				</EDitem>
			)
		}
		</EDContainer>
		</>
	)
}

Notifications.defaultProps = {
	regions: []
}

Notifications.propTypes = {
	regions: PropTypes.array
}

const mapStateToProps = state => ({
	regions: state.regions
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)