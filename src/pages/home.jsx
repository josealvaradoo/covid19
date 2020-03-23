import React, { useEffect, useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import VenezuelaMap from '../components/map/venezuela-map';
import CasesService from '../services/CasesService';
import FloatButton from '../components/buttons/float-button';
import Icon from '../components/icons/icon';
import CasesList from '../components/lists/cases-list';
import Item, { ItemContent, ItemHeading } from '../components/items/item';
import EDGrid from '../components/grid/ed-grid';
import EDcolumn from '../components/grid/ed-column';

const Home = ({user}) => {
	const [cases, setCases] = useState([])
	const [total, setTotalCases] = useState(0)

	useEffect(() => {
		(async () => {
			let _total = 0
			const data = await CasesService.fetchData()

			data.map(elem => _total += Number(elem.cases))

			setCases(data)
			setTotalCases(_total)
		})()
	}, [])

	return (
		<>
		<EDGrid m={2}>
			<EDcolumn>
				<VenezuelaMap cases={cases} />
			</EDcolumn>
			<EDcolumn>
			{
				cases.length > 0 && (
				<EDGrid>
					<div className="height-limit">
						<Item>
							<ItemHeading>Venezuela</ItemHeading>
							<ItemContent>{total} casos</ItemContent>
						</Item>
						<CasesList cases={cases} />
					</div>
				</EDGrid>
				)
			}
			</EDcolumn>
		</EDGrid>
		{user && <FloatButton type="circle" link to="/admin/dashboard"><Icon icon="plus" type="fas" /></FloatButton>}
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